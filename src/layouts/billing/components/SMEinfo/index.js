import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MDTypography from "components/MDTypography";

function SMEInfoCard() {
  const smeData = {
    compCategory: "Yellow",
    lgnm: "MADRECHA SOLUTIONS PRIVATE LIMITED",
    pan: "AAJCM9929L",
    gstin: "27AAJCM9929L1ZM",
    adr: "92, Ground Floor, Sun view, Mahatma Phule Naka, Savarkar Nagar, Thane, Maharashtra, 400606",
    nba: ["Supplier of Services"],
    rgdt: "10/08/2020"
  };

  // Calculate the age of the company
  const registrationDate = new Date(smeData.rgdt);
  const today = new Date();
  const age = today.getFullYear() - registrationDate.getFullYear();

  return (
    <Card>
      <CardContent>
      <MDTypography mt={2} variant="h6" fontWeight="medium" textTransform="capitalize">
          SME Information
        </MDTypography>
        <Divider />
        <MDTypography variant="h6" fontWeight="medium">Company Name:</MDTypography>
        <MDTypography variant="body2" fontWeight="regular" gutterBottom>
          {smeData.lgnm}
        </MDTypography>
        <MDTypography variant="h6" fontWeight="medium">Company Category:</MDTypography>
        <Typography variant="body2" fontWeight="regular" gutterBottom>
          {smeData.compCategory}
        </Typography>
        <MDTypography variant="h6" fontWeight="medium">PAN:</MDTypography>
        <Typography variant="body2" fontWeight="regular" gutterBottom>
          {smeData.pan}
        </Typography>
        <MDTypography variant="h6" fontWeight="medium">GSTIN:</MDTypography>
        <Typography variant="body2" fontWeight="regular" gutterBottom>
          {smeData.gstin}
        </Typography>
        <MDTypography variant="h6" fontWeight="medium">Address:</MDTypography>
        <Typography variant="body2" fontWeight="regular" gutterBottom>
          {smeData.adr}
        </Typography>
        <MDTypography variant="h6" fontWeight="medium">Nature of Business:</MDTypography>
        <Typography variant="body2" fontWeight="regular" gutterBottom>
          {smeData.nba.join(", ")}
        </Typography>
        <MDTypography variant="h6" fontWeight="medium">Company Age:</MDTypography>
        <Typography variant="body2" fontWeight="regular" gutterBottom>
          {age} years
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SMEInfoCard;
