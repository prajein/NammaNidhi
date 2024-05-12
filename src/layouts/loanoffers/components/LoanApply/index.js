import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Divider from "@mui/material/Divider";

// Images
import loanIcon from "assets/images/bg-profile.jpeg";

import { useMaterialUIController } from "context";

function SubCard({ title, value }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <MDBox
        borderRadius="lg"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={1}
        sx={{
          border: ({ borders: { borderWidth, borderColor } }) =>
            `${borderWidth[1]} solid ${borderColor}`,
          minHeight: "80px", // Adjust the height as needed
        }}
      >
       <MDTypography variant="button" fontWeight="regular" color="text">
          {title}
        </MDTypography>
        <MDTypography variant="h4" fontWeight="medium">
          {value}
        </MDTypography>
      </MDBox>
    </Grid>
  );
}

function LoanApplyCard() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card id="loan-apply">
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Apply for Loan
        </MDTypography>
        <MDBox display="flex" justifyContent="center" py={1}>
          <a href="/smefillup" style={{ textDecoration: "none" }}>
            <MDButton variant="contained" color="primary">
              Complete Finishing Details
            </MDButton>
          </a>
        </MDBox>
        <a href="/applyloan" style={{ textDecoration: "none" }}>
        <MDButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;Apply for New Loan
        </MDButton>
        </a>
      </MDBox>
      <Divider />
      <MDBox p={2}>
        <Grid container spacing={3} justifyContent="center">
          {/* Subcards */}
          <SubCard title="Namma Nidhi Credit Score" value="718" />
          <SubCard title="Probability of Getting a Loan" value="76.8%" />
          {/* Add more subcards here */}
        </Grid>
      </MDBox>
    </Card>
  );
}

export default LoanApplyCard;
