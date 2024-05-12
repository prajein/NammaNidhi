import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import loanReqTableData from "layouts/tables/data/loanReqTableData";
import SimpleDefaultCard from "examples/Cards/InfoCards/SimpleDefaultCard";

function MyDashboardBank() {
  const { columns, rows } = loanReqTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={2} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <SimpleDefaultCard
                title="Total Requests"
                description="Total number of loan requests"
                value="238"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <SimpleDefaultCard
                description="Avg NN Score of all applicants"
                title="NN Smart score"
                value="631.78"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <SimpleDefaultCard
                title="Credit risk"
                description="Avg credit risk of all applicants"
                value="73.64"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <SimpleDefaultCard
                title="Total Loan amount"
                description="Total amount requested"
                value="₹13.2 Cr"
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Grid mb={3} item xs={12}>
        <Card>
          <MDBox
            mx={2}
            mt={3}
            py={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              Loan Requests
            </MDTypography>
          </MDBox>
          <MDBox pt={3}>
            <DataTable
              table={{ columns, rows }}
              isSorted={false}
              entriesPerPage={false}
              showTotalEntries={false}
              noEndBorder
            />
          </MDBox>
        </Card>
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default MyDashboardBank;
