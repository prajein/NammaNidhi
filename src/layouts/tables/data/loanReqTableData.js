import { useState } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { green, yellow, red, dark } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const LoanReqTableData = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [rows, setRows] = useState([
    {
      smeName: "Rajesh Kumar",
      amountRequested: "₹50,000",
      creditScore: "650",
      creditRisk: "0.25",
      category: "Green",
      editable: true,
    },
    {
      smeName: "Anjali Sharma",
      amountRequested: "₹80,000",
      creditScore: "750",
      creditRisk: "0.15",
      category: "Yellow",
      editable: true,
    },
    {
      smeName: "Ramesh Gupta",
      amountRequested: "₹1,00,000",
      creditScore: "550",
      creditRisk: "0.35",
      category: "Red",
      editable: true,
    },
    {
      smeName: "Vikram Singh",
      amountRequested: "₹1,20,000",
      creditScore: "800",
      creditRisk: "0.10",
      category: "Green",
      editable: true,
    },
    {
      smeName: "Anita Verma",
      amountRequested: "₹90,000",
      creditScore: "500",
      creditRisk: "0.45",
      category: "Dark",
      editable: true,
    },
    {
      smeName: "Sunil Kumar",
      amountRequested: "₹1,60,000",
      creditScore: "700",
      creditRisk: "0.20",
      category: "Yellow",
      editable: true,
    },
  ]);

  const handleClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleConfirmLoan = () => {
    const updatedRows = rows.map((row) =>
      row.smeName === selectedRow.smeName
        ? { ...row, category: "Green", editable: false }
        : row
    );
    setRows(updatedRows);
    alert("Loan confirmed for " + selectedRow.smeName);
    handleClose();
  };

  const handleRejectLoan = () => {
    const updatedRows = rows.map((row) =>
      row.smeName === selectedRow.smeName
        ? { ...row, category: "Red", editable: false }
        : row
    );
    setRows(updatedRows);
    alert("Loan rejected for " + selectedRow.smeName);
    handleClose();
  };

  const LoanRequest = ({ smeName, amountRequested, creditScore, creditRisk, category, editable }) => (
    <MDBox
      display="flex"
      alignItems="center"
      lineHeight={1}
      bgcolor={category === "Green" ? green[100] : category === "Red" ? red[100] : "transparent"}
    >
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
      <MDBadge
        badgeContent={category}
        color={
          category === "Green"
            ? "success"
            : category === "Yellow"
            ? "warning"
            : category === "Red"
            ? "error"
            : "dark"
        }
        variant="dot"
        size="small"
        ml={2}
      />
      <IconButton color="success" disabled={!editable} onClick={(event) => handleClick(event, { smeName, amountRequested, creditScore, creditRisk, category })}>
        <CheckIcon />
      </IconButton>
      <IconButton color="error" disabled={!editable} onClick={(event) => handleClick(event, { smeName, amountRequested, creditScore, creditRisk, category })}>
        <ClearIcon />
      </IconButton>
    </MDBox>
  );

  const PopupCard = ({ open, onClose, onConfirmLoan, onRejectLoan }) => (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Card>
        <CardContent>
          <MDTypography variant="body1">Confirm your action</MDTypography>
          <MDBox display="flex" justifyContent="space-around" mt={2}>
            <Button variant="contained" color="success" onClick={onConfirmLoan}>
              Confirm Loan
            </Button>
            <Button variant="contained" color="error" onClick={onRejectLoan}>
              Reject Loan
            </Button>
          </MDBox>
        </CardContent>
      </Card>
    </Popover>
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

    rows: rows.map((row, index) => ({
      ...row,
      action: (
        <MDBox display="flex">
          <IconButton color="success" disabled={!row.editable} onClick={(event) => handleClick(event, row)}>
            <CheckIcon />
          </IconButton>
          <IconButton color="error" disabled={!row.editable} onClick={(event) => handleClick(event, row)}>
            <ClearIcon />
          </IconButton>
          <PopupCard
            open={Boolean(anchorEl) && selectedRow === row}
            onClose={handleClose}
            onConfirmLoan={handleConfirmLoan}
            onRejectLoan={handleRejectLoan}
          />
        </MDBox>
      ),
      original: row,
    })),
  };
};

export default LoanReqTableData;
