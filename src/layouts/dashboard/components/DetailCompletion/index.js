import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function FinishingDetailsCard() {
  return (
    <Card id="finishing-details">
      <MDBox p={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Complete Finishing Details
        </MDTypography>
        <MDTypography variant="body2" color="textSecondary" mt={1}>
          Please complete your finishing details to proceed.
        </MDTypography>
      </MDBox>
      <MDBox px={3} pb={3}>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            <MDButton variant="outlined" color="primary" startIcon={<Icon>edit</Icon>}>
              Edit Details
            </MDButton>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default FinishingDetailsCard;
