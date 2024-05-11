import PropTypes from "prop-types";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function SubCard({ title, value }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <MDBox p={2} textAlign="center">
        <MDTypography variant="h6" fontWeight="medium">
          {title}
        </MDTypography>
        <MDTypography variant="h5" fontWeight="medium">
          {value}
        </MDTypography>
      </MDBox>
    </Grid>
  );
}

function LoanInfoCard({ color, icon, title, description, value }) {
  return (
    <Card>
      <MDBox p={2} display="flex">
        <MDBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="2rem"
          height="2rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </MDBox>
        <MDBox p={2} flex="1">
          <MDBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              {title}
            </MDTypography>
            {description && (
              <MDTypography variant="caption" color="text" fontWeight="regular">
                {description}
              </MDTypography>
            )}
            {description && !value ? null : <Divider />}
            {value && (
              <MDTypography variant="h5" fontWeight="medium">
                {value}
              </MDTypography>
            )}
          </MDBox>
          <Divider />
          <MDBox py={2} px={2}>
            <Grid container spacing={2}>
              <SubCard title="Namma Nidhi Credit Score" value="745" />
              <SubCard title="Probability of Getting a Loan" value="80%" />
              {/* Add more subcards here */}
            </Grid>
          </MDBox>
          <Divider />
          <MDBox py={2} px={2} textAlign="center">
            <Button variant="contained" color="primary">
              Apply for Loan
            </Button>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

LoanInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

LoanInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LoanInfoCard;
