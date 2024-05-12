import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

import profilesListData from "layouts/profile/data/profilesListData";

import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            {/* <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid> */}
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <ProfileInfoCard
                title="profile information"
                description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                info={{
                  fullName: "Prajein Chandramouli Kalaiselvi",
                  mobile: "(44) 123 1234 123",
                  email: "alecthompson@mail.com",
                  location: "Chennai, India",
                }}
                social={[
                  {
                    link: "",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
