import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

import Footer from "layouts/authentication/components/Footer";

function CoverLayout({ coverHeight, image, children }) {
  return (
    <PageLayout>
      {/* <DefaultNavbar
        transparent
        light
      /> */}
      <MDBox
        width="calc(100%-2rem)" // Set width to 100%
        minHeight={coverHeight}
        borderRadius="xl"
        mx={2} // Remove mx={2}
        my={2}
        pt={6}
        pb={28}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.4),
              rgba(gradients.dark.state, 0.4)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MDBox mt={{ xs: -20, lg: -18 }} px={1} mx="auto" width={{ xs: "100%", lg: "60%" }}> 
  <Grid justifyContent="center"> 
    <Grid item xs={12} sm={10} md={8} lg={6} xl={5}> 
      {children}
    </Grid>
  </Grid>
</MDBox>



      {/* <Footer /> */}
    </PageLayout>
  );
}

// Setting default props for the CoverLayout
CoverLayout.defaultProps = {
  coverHeight: "35vh",
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  coverHeight: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
