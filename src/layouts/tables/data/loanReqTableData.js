import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import IconButton from "@mui/material/IconButton";

import { green, yellow, red, dark } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export default function data() {
  const LoanRequest = ({ smeName, amountRequested, creditScore, creditRisk, category }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {smeName}
        </MDTypography>
        <MDTypography variant="caption">{amountRequested}</MDTypography>
      </MDBox>
      <MDBox ml={2}>
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          NN Smart Credit Score
        </MDTypography>
        <MDTypography variant="caption">{creditScore}</MDTypography>
      </MDBox>
      <MDBox ml={2}>
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          Credit Risk
        </MDTypography>
        <MDTypography variant="caption">{creditRisk}</MDTypography>
      </MDBox>
      <MDBadge badgeContent={category} color={category === "Green" ? "success" : category === "Yellow" ? "warning" : category === "Red" ? "error" : "dark"} variant="dot" size="small" ml={2} />
      <IconButton color="success">
        <CheckIcon />
      </IconButton>
      <IconButton color="error">
        <ClearIcon />
      </IconButton>
    </MDBox>
  );

  return {
    columns: [
      { Header: "SME Name", accessor: "smeName", width: "20%", align: "left" },
      { Header: "Amount Requested", accessor: "amountRequested", align: "left" },
      { Header: "NN Smart Credit Score", accessor: "creditScore", align: "left" },
      { Header: "Credit Risk", accessor: "creditRisk", align: "left" },
      { Header: "Category", accessor: "category", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        smeName: "John Michael",
        amountRequested: "$50,000",
        creditScore: "650",
        creditRisk: "0.25",
        category: "Green",
      },
      {
        smeName: "Alexa Liras",
        amountRequested: "$80,000",
        creditScore: "750",
        creditRisk: "0.15",
        category: "Yellow",
      },
      {
        smeName: "Laurent Perrier",
        amountRequested: "$100,000",
        creditScore: "550",
        creditRisk: "0.35",
        category: "Red",
      },
      {
        smeName: "Michael Levi",
        amountRequested: "$120,000",
        creditScore: "800",
        creditRisk: "0.10",
        category: "Green",
      },
      {
        smeName: "Richard Gran",
        amountRequested: "$90,000",
        creditScore: "500",
        creditRisk: "0.45",
        category: "Dark",
      },
      {
        smeName: "Miriam Eric",
        amountRequested: "$60,000",
        creditScore: "700",
        creditRisk: "0.20",
        category: "Yellow",
      },
    ].map((row) => ({
      ...row,
      action: (
        <MDBox display="flex">
          <IconButton color="success">
            <CheckIcon />
          </IconButton>
          <IconButton color="error">
            <ClearIcon />
          </IconButton>
        </MDBox>
      ),
    })),
  };
}
