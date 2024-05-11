import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

function LoanApplication() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [udhyogAadhaarNo, setUdhyogAadhaarNo] = useState("");
  const [gstCert, setGstCert] = useState(null);
  const [businessType, setBusinessType] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [industry, setIndustry] = useState("");
  const [partnershipDeed, setPartnershipDeed] = useState(null);
  const [moaAndAoa, setMoaAndAoa] = useState(null);
  const [certOfIncorporation, setCertOfIncorporation] = useState(null);
  const [annualRevenue, setAnnualRevenue] = useState("");
  const [profitMargin, setProfitMargin] = useState("");
  const [balanceSheet, setBalanceSheet] = useState(null);
  const [bankStatements, setBankStatements] = useState(null);
  const [taxReturns, setTaxReturns] = useState(null);
  const [loanAmountRequested, setLoanAmountRequested] = useState("");
  const [repaymentPeriod, setRepaymentPeriod] = useState("");
  const [proposedCollateral, setProposedCollateral] = useState("");
  const [currentDebtObligations, setCurrentDebtObligations] = useState(null);
  const [businessPlan, setBusinessPlan] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!udhyogAadhaarNo || !gstCert || !businessType || !loanPurpose || !industry) {
        setErrorMessage("Please fill in all the required fields.");
        return;
      }
    } else if (currentStep === 2) {
      if (!annualRevenue || !profitMargin || !balanceSheet || !bankStatements || !taxReturns) {
        setErrorMessage("Please fill in all the required fields.");
        return;
      }
    } else if (currentStep === 3) {
      if (!loanAmountRequested || !loanPurpose || !repaymentPeriod) {
        setErrorMessage("Please fill in all the required fields.");
        return;
      }
    } else if (currentStep === 4) {
      if (!proposedCollateral) {
        setErrorMessage("Please fill in all the required fields.");
        return;
      }
    }

    setProgress((prevProgress) => prevProgress + 25);
    setCurrentStep((prevStep) => prevStep + 1);

    if (currentStep === 4) {
      let progressValue = 0;
      const interval = setInterval(() => {
        progressValue += 10;
        setProgress(progressValue);

        if (progressValue === 100) {
          clearInterval(interval);
          setSuccessMessage("Loan application submitted successfully!");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      }, 1000);
    }
  };

  const handlePreviousStep = () => {
    setProgress((prevProgress) => prevProgress - 25);
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox p={3}>
                {currentStep === 1 && (
                  <>
                    <MDTypography variant="h6">Business Info</MDTypography>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Udyog Aadhaar No."
                        value={udhyogAadhaarNo}
                        onChange={(e) => setUdhyogAadhaarNo(e.target.value)}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.png"
                        onChange={(e) => setGstCert(e.target.files[0])}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        select
                        fullWidth
                        label="Business Type"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                      >
                        <option value="Proprietor">Proprietor</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Pvt">Pvt</option>
                      </TextField>
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Loan Purpose"
                        value={loanPurpose}
                        onChange={(e) => setLoanPurpose(e.target.value)}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Industry"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                      />
                    </MDBox>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <MDTypography variant="h6">Financial Info</MDTypography>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Annual Revenue"
                        type="number"
                        value={annualRevenue}
                        onChange={(e) => setAnnualRevenue(e.target.value)}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Profit Margin"
                        type="number"
                        value={profitMargin}
                        onChange={(e) => setProfitMargin(e.target.value)}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.png"
                        onChange={(e) => setBalanceSheet(e.target.files[0])}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.png"
                        onChange={(e) => setBankStatements(e.target.files[0])}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.png"
                        onChange={(e) => setTaxReturns(e.target.files[0])}
                      />
                    </MDBox>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <MDTypography variant="h6">Loan Details</MDTypography>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Loan Amount Requested"
                        type="number"
                        value={loanAmountRequested}
                        onChange={(e) => setLoanAmountRequested(e.target.value)}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Repayment Period"
                        value={repaymentPeriod}
                        onChange={(e) => setRepaymentPeriod(e.target.value)}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <TextField
                        fullWidth
                        label="Proposed Collateral"
                        value={proposedCollateral}
                        onChange={(e) => setProposedCollateral(e.target.value)}
                      />
                    </MDBox>
                  </>
                )}
                {currentStep === 4 && (
                  <>
                    <MDTypography variant="h6">Additional Info</MDTypography>
                    <MDBox mt={2}>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.png"
                        onChange={(e) => setCurrentDebtObligations(e.target.files[0])}
                      />
                    </MDBox>
                    <MDBox mt={2}>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.png"
                        onChange={(e) => setBusinessPlan(e.target.files[0])}
                      />
                    </MDBox>
                  </>
                )}
                <MDBox mt={2}>
                  {currentStep > 1 && (
                    <Button variant="outlined" onClick={handlePreviousStep}>
                      Previous
                    </Button>
                  )}
                  {currentStep < 4 ? (
                    <Button variant="contained" onClick={handleNextStep} style={{ marginLeft: 8 }}>
                      Next
                    </Button>
                  ) : (
                    <MDButton variant="gradient" color="info" onClick={handleNextStep}>
                      Submit
                    </MDButton>
                  )}
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

export default LoanApplication;
