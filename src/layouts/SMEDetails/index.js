import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "components/MDTypography";
import Card from "@mui/material/Card";
import Footer from "examples/Footer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import MDButton from "components/MDButton";
import { LocalGasStationRounded } from "@mui/icons-material";

function SMEProfile() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [currentAssets, setCurrentAssets] = useState("");
  const [currentLiabilities, setCurrentLiabilities] = useState("");
  const [inventory, setInventory] = useState("");
  const [totalDebt, setTotalDebt] = useState("");
  const [shareholdersEquity, setShareholdersEquity] = useState("");
  const [interestExpense, setInterestExpense] = useState("");
  const [netProfit, setNetProfit] = useState("");
  const [revenue, setRevenue] = useState("");
  const [earningsBeforeInterestTaxes, setEarningsBeforeInterestTaxes] =
    useState("");
  const [totalAssets, setTotalAssets] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sanctionLetters, setSanctionLetters] = useState([]);
  const [balanceSheet, setBalanceSheet] = useState(null);

  const calculateCurrentRatio = () => {
    if (parseFloat(currentLiabilities) === 0) return "Infinity";
    return (parseFloat(currentAssets) / parseFloat(currentLiabilities)).toFixed(
      2,
    );
  };

  const calculateQuickRatio = () => {
    const quickAssets = parseFloat(currentAssets) - parseFloat(inventory);
    if (parseFloat(currentLiabilities) === 0) return "Infinity";
    return (quickAssets / parseFloat(currentLiabilities)).toFixed(2);
  };

  const calculateDebtToEquityRatio = () => {
    if (parseFloat(shareholdersEquity) === 0) return "Infinity";
    return (parseFloat(totalDebt) / parseFloat(shareholdersEquity)).toFixed(2);
  };

  const calculateInterestCoverageRatio = () => {
    if (parseFloat(interestExpense) === 0) return "Infinity";
    return (parseFloat(netProfit) / parseFloat(interestExpense)).toFixed(2);
  };

  const calculateNetProfitMargin = () => {
    if (parseFloat(revenue) === 0) return "Infinity";
    return ((parseFloat(netProfit) / parseFloat(revenue)) * 100).toFixed(2);
  };

  const calculateReturnOnAssets = () => {
    if (parseFloat(currentAssets) === 0) return "Infinity";
    return ((parseFloat(netProfit) / parseFloat(currentAssets)) * 100).toFixed(
      2,
    );
  };

  const calculateReturnOnEquity = () => {
    if (parseFloat(shareholdersEquity) === 0) return "Infinity";
    return (
      (parseFloat(netProfit) / parseFloat(shareholdersEquity)) *
      100
    ).toFixed(2);
  };

  const calculateAssetTurnoverRatio = () => {
    if (parseFloat(currentAssets) === 0) return "Infinity";
    return (parseFloat(revenue) / parseFloat(currentAssets)).toFixed(2);
  };

  const handleSubmit = async () => {
    if (step === 1) {
      if (
        !currentAssets ||
        !currentLiabilities ||
        !totalDebt ||
        !shareholdersEquity ||
        !interestExpense ||
        !netProfit ||
        !revenue
      ) {
        setErrorMessage("Please fill in all the fields.");
        return;
      }
      setStep(2);
      return;
    }
    if (step === 2) {
      if (!earningsBeforeInterestTaxes || !totalAssets) {
        setErrorMessage("Please fill in all the fields.");
        return;
      }
      setStep(3);
      return;
    }
    if (step === 3) {
      const formData = new FormData();
      formData.append("currentAssets", currentAssets);
      formData.append("currentLiabilities", currentLiabilities);
      formData.append("inventory", inventory);
      formData.append("totalDebt", totalDebt);
      formData.append("shareholdersEquity", shareholdersEquity);
      formData.append("interestExpense", interestExpense);
      formData.append("netProfit", netProfit);
      formData.append("revenue", revenue);
      formData.append(
        "earningsBeforeInterestTaxes",
        earningsBeforeInterestTaxes,
      );
      formData.append("totalAssets", totalAssets);
      if (sanctionLetters && sanctionLetters.length > 0) {
        Array.from(sanctionLetters).forEach((file) => {
          formData.append("sanctionLetters", file);
        });
      }
      formData.append("balanceSheet", balanceSheet);
      try {
        const response = await fetch("http://localhost:5000/calculate_credit", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          localStorage.set("credit_calculation", await response.json());
          setSuccessMessage("Data submitted successfully!");
        } else {
          setErrorMessage("Failed to submit data.");
        }
      } catch (error) {
        setErrorMessage("Failed to submit data.");
      }

      try {
        const response = await fetch("http://localhost:5000/sanction", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          localStorage.set("sanciton", await response.json());
          setSuccessMessage("Data submitted successfully!");
        } else {
          setErrorMessage("Failed to submit data.");
        }
      } catch (error) {
        setErrorMessage("Failed to submit data.");
      }
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox p={3}>
                {step === 1 && (
                  <>
                    <MDTypography variant="h6">
                      Step 1: Financial Data
                    </MDTypography>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Current Assets"
                        type="number"
                        value={currentAssets}
                        onChange={(e) => setCurrentAssets(e.target.value)}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Current Liabilities"
                        type="number"
                        value={currentLiabilities}
                        onChange={(e) => setCurrentLiabilities(e.target.value)}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Inventory"
                        type="number"
                        value={inventory}
                        onChange={(e) => setInventory(e.target.value)}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Total Debt"
                        type="number"
                        value={totalDebt}
                        onChange={(e) => setTotalDebt(e.target.value)}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Shareholders' Equity"
                        type="number"
                        value={shareholdersEquity}
                        onChange={(e) => setShareholdersEquity(e.target.value)}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Interest Expense"
                        type="number"
                        value={interestExpense}
                        onChange={(e) => setInterestExpense(e.target.value)}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Net Profit"
                        type="number"
                        value={netProfit}
                        onChange={(e) => setNetProfit(e.target.value)}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Revenue"
                        type="number"
                        value={revenue}
                        onChange={(e) => setRevenue(e.target.value)}
                      />
                    </MDBox>
                  </>
                )}
                {step === 2 && (
                  <>
                    <MDTypography variant="h6">
                      Step 2: Next Year Financial Projections
                    </MDTypography>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Earnings Before Interest and Taxes (EBIT)"
                        type="number"
                        value={earningsBeforeInterestTaxes}
                        onChange={(e) =>
                          setEarningsBeforeInterestTaxes(e.target.value)
                        }
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Total Assets"
                        type="number"
                        value={totalAssets}
                        onChange={(e) => setTotalAssets(e.target.value)}
                      />
                    </MDBox>
                  </>
                )}
                {step === 3 && (
                  <>
                    <MDTypography variant="h6">
                      Step 3: Upload Documents
                    </MDTypography>
                    <MDBox mt={2}>
                      <span style={{ fontSize: "12px" }}>
                        {" "}
                        Sanction Letters:
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => setSanctionLetters(e.target.files)}
                        />
                      </span>
                      <span style={{ fontSize: "12px" }}>
                        {" "}
                        Balance Sheet:
                        <input
                          fullWidth
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => setBalanceSheet(e.target.files[0])}
                        />
                      </span>
                    </MDBox>
                  </>
                )}
                <MDBox mt={1}>
                  <MDButton
                    variant="gradient"
                    color="info"
                    fullWidth
                    onClick={handleSubmit}
                  >
                    {step === 3 ? "Submit" : "Next"}
                  </MDButton>
                </MDBox>
                <MDBox mt={2}>
                  {step === 1 && (
                    <>
                      <MDTypography variant="subtitle1">
                        Current Ratio: {calculateCurrentRatio()}
                      </MDTypography>
                      <MDTypography variant="subtitle1">
                        Quick Ratio: {calculateQuickRatio()}
                      </MDTypography>
                      <MDTypography variant="subtitle1">
                        Debt-to-Equity Ratio: {calculateDebtToEquityRatio()}
                      </MDTypography>
                      <MDTypography variant="subtitle1">
                        Interest Coverage Ratio:{" "}
                        {calculateInterestCoverageRatio()}
                      </MDTypography>
                      <MDTypography variant="subtitle1">
                        Net Profit Margin: {calculateNetProfitMargin()}%
                      </MDTypography>
                      <MDTypography variant="subtitle1">
                        Return on Assets (ROA): {calculateReturnOnAssets()}%
                      </MDTypography>
                      <MDTypography variant="subtitle1">
                        Return on Equity (ROE): {calculateReturnOnEquity()}%
                      </MDTypography>
                      <MDTypography variant="subtitle1">
                        Asset Turnover Ratio: {calculateAssetTurnoverRatio()}
                      </MDTypography>
                    </>
                  )}
                  {/* Display calculations for step 2 if any */}
                  {step === 2 && (
                    <>
                      <MDTypography variant="subtitle1">
                        Earnings Before Interest and Taxes (EBIT):{" "}
                        {earningsBeforeInterestTaxes}
                      </MDTypography>
                      <MDTypography variant="subtitle1">
                        Total Assets: {totalAssets}
                      </MDTypography>
                    </>
                  )}
                </MDBox>
                {progress > 0 && progress < 100 && (
                  <MDBox mt={3}>
                    <LinearProgress variant="determinate" value={progress} />
                    <MDTypography variant="subtitle1" mt={2}>
                      Uploading {progress}%
                    </MDTypography>
                  </MDBox>
                )}
                {successMessage && (
                  <MDBox mt={3}>
                    <Alert severity="success">{successMessage}</Alert>
                  </MDBox>
                )}
                {errorMessage && (
                  <MDBox mt={3}>
                    <Alert severity="error">{errorMessage}</Alert>
                  </MDBox>
                )}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SMEProfile;
