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

function SMEProfile() {
  const [progress, setProgress] = useState(0);
  const [currentAssets, setCurrentAssets] = useState("");
  const [currentLiabilities, setCurrentLiabilities] = useState("");
  const [inventory, setInventory] = useState("");
  const [totalDebt, setTotalDebt] = useState("");
  const [shareholdersEquity, setShareholdersEquity] = useState("");
  const [interestExpense, setInterestExpense] = useState("");
  const [netProfit, setNetProfit] = useState("");
  const [revenue, setRevenue] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateCurrentRatio = () => {
    if (parseFloat(currentLiabilities) === 0) return "Infinity";
    return (parseFloat(currentAssets) / parseFloat(currentLiabilities)).toFixed(2);
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
    return ((parseFloat(netProfit) / parseFloat(currentAssets)) * 100).toFixed(2);
  };

  const calculateReturnOnEquity = () => {
    if (parseFloat(shareholdersEquity) === 0) return "Infinity";
    return ((parseFloat(netProfit) / parseFloat(shareholdersEquity)) * 100).toFixed(2);
  };

  const calculateAssetTurnoverRatio = () => {
    if (parseFloat(currentAssets) === 0) return "Infinity";
    return ((parseFloat(revenue) / parseFloat(currentAssets))).toFixed(2);
  };

  const handleSubmit = () => {
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

    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 10;
      setProgress(progressValue);

      if (progressValue === 100) {
        clearInterval(interval);
        setSuccessMessage("Data submitted successfully!");
      }
    }, 1000);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h6">
                  Financial Data
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
                <MDBox mt={1}>
                  <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
                    Submit
                  </MDButton>
                </MDBox>
                <MDBox mt={2}>
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
                    Interest Coverage Ratio: {calculateInterestCoverageRatio()}
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
                </MDBox>
                {progress > 0 && progress < 100 && (
                  <MDBox mt={3}>
                    <LinearProgress variant="determinate" value={progress} />
                    <MDTypography variant="subtitle1" mt={2}>
                      Uploading {progress}%...
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
