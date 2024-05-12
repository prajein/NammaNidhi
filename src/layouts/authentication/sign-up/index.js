import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import CoverLayout from "layouts/authentication/components/CoverLayout";

import bgImage from "assets/images/bgsign4.png";

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return re.test(password);
}

function Cover() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedType, setSelectedType] = useState(""); //Role
  const [gstin, setGstin] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [data, setData] = useState("");
  const [d, setD] = useState(null);
  const nav = useNavigate();

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleNextPage = () => {
    let isValid = true;
    if (!validateEmail(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }
    if (!validatePassword(password)) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }
    if (isValid) {
      setPage(2);
    }
  };

  const handleGetCompanyDetails = async () => {
    const resp = await fetch(
      `https://gst-return-status.p.rapidapi.com/free/gstin/${gstin}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key":
            "2048709673msha68caf7a53b895cp1cdce5jsn716f33d84e2e",
          "X-RapidAPI-Host": "gst-return-status.p.rapidapi.com",
        },
      },
    );
    const data = await resp.json();
    setD({
      cn: data.data.lgnm,
      adr: data.data.adr,
      nob: data.data.nba,
      coa: data.data.rgdt,
    });
    console.log("Fetching company details for GSTIN:", d);
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        {page === 1 && (
          <>
            <MDBox
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="success"
              mx={2}
              mt={-3}
              p={3}
              mb={1}
              textAlign="center"
            >
              <MDTypography
                variant="h4"
                fontWeight="medium"
                color="white"
                mt={1}
              >
                Join Namma Nidhi (Our Treasure), today!
              </MDTypography>
              <MDTypography
                display="block"
                variant="button"
                color="white"
                my={1}
              >
                Enter your email and password to register
              </MDTypography>
            </MDBox>
            <MDBox pt={6} pb={4} px={4}>
              <MDBox component="form" role="form">
                <MDBox mb={2}>
                  <MDInput
                    type="text"
                    label="Name"
                    variant="standard"
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    type="email"
                    label="Email"
                    variant="standard"
                    fullWidth
                    error={emailError}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailError && (
                    <MDTypography variant="caption" color="error">
                      Invalid email address
                    </MDTypography>
                  )}
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    type="password"
                    label="Password"
                    variant="standard"
                    fullWidth
                    error={passwordError}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {passwordError && (
                    <MDTypography variant="caption" color="error">
                      Password must contain at least 8 characters with
                      alphanumeric and symbols
                    </MDTypography>
                  )}
                </MDBox>
                <MDBox mb={2}>
                  <MDTypography variant="button" color="text">
                    Register as a:
                  </MDTypography>
                  <MDBox display="flex" alignItems="center">
                    <Checkbox
                      value="SME"
                      checked={selectedType === "SME"}
                      onChange={handleChange}
                    />
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                    >
                      &nbsp;&nbsp;SME (loan requester)
                    </MDTypography>
                  </MDBox>
                  <MDBox display="flex" alignItems="center">
                    <Checkbox
                      value="Bank"
                      checked={selectedType === "Bank"}
                      onChange={handleChange}
                    />
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                    >
                      &nbsp;&nbsp;Banks/Organisations
                    </MDTypography>
                  </MDBox>
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton
                    variant="gradient"
                    color="info"
                    fullWidth
                    onClick={handleNextPage}
                  >
                    Next
                  </MDButton>
                </MDBox>
              </MDBox>
            </MDBox>
            {/* Render 'Already have an account? Sign In' section */}
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </>
        )}
        {page === 2 && (
          <>
            {selectedType === "SME" && (
              <>
                {/* Implement Second page for SME */}
                <MDBox
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="success"
                  mx={2}
                  mt={-3}
                  p={3}
                  mb={1}
                  textAlign="center"
                >
                  <IconButton
                    style={{ position: "absolute", top: 10, left: 30 }}
                    onClick={() => setPage(1)}
                  >
                    <ArrowBackIcon style={{ color: "white" }} />
                  </IconButton>
                  <MDTypography
                    variant="h4"
                    fontWeight="medium"
                    color="white"
                    mt={1}
                  >
                    Additional Details for SME
                  </MDTypography>
                  <MDTypography
                    display="block"
                    variant="button"
                    color="white"
                    my={1}
                  >
                    Enter additional details about your SME
                  </MDTypography>
                </MDBox>
                <MDBox pt={4} pb={3} px={3}>
                  {/* Input Fields for SME */}
                  <MDBox component="form" role="form">
                    <MDBox mb={2}>
                      <MDInput
                        type="text"
                        label="SME's GSTIN Number"
                        variant="standard"
                        onChange={(e) => setGstin(e.target.value)}
                        fullWidth
                      />
                      <MDButton
                        variant="outlined"
                        size="small"
                        color="primary"
                        onClick={handleGetCompanyDetails}
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "5px",
                          zIndex: 1,
                        }}
                      >
                        Get Company Details
                      </MDButton>
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput
                        type="text"
                        label="Company Name"
                        variant="standard"
                        fullWidth
                        value={d?.cn || "Name from API"}
                        disabled
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput
                        type="text"
                        label="Address"
                        variant="standard"
                        fullWidth
                        value={d?.adr || "Address from API"}
                        disabled
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput
                        type="text"
                        label="Nature of Business"
                        variant="standard"
                        fullWidth
                        value={d?.nob?.[0] || "Nature of Business from API"}
                        disabled
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput
                        type="text"
                        label="Company Age"
                        variant="standard"
                        fullWidth
                        value={d?.coa || "Registration from API"}
                        disabled
                      />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" ml={-1}>
                      <Checkbox />
                      <MDTypography
                        variant="button"
                        fontWeight="regular"
                        color="text"
                        sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                      >
                        &nbsp;&nbsp;I agree the&nbsp;
                      </MDTypography>
                      <MDTypography
                        component="a"
                        href="#"
                        variant="button"
                        fontWeight="bold"
                        color="info"
                        textGradient
                      >
                        Terms and Conditions
                      </MDTypography>
                    </MDBox>
                    <MDBox mt={4} mb={1}>
                      <MDButton
                        variant="gradient"
                        color="info"
                        fullWidth
                        onClick={() => nav("/dasboard")}
                      >
                        Sign Up
                      </MDButton>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </>
            )}
            {selectedType === "Bank" && (
              <>
                {/* Implement Second page for Bank */}
                <MDBox
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="success"
                  mx={2}
                  mt={-3}
                  p={3}
                  mb={1}
                  textAlign="center"
                >
                  <IconButton
                    style={{ position: "absolute", top: 10, left: 30 }}
                    onClick={() => setPage(1)}
                  >
                    <ArrowBackIcon style={{ color: "white" }} />
                  </IconButton>
                  <MDTypography
                    variant="h4"
                    fontWeight="medium"
                    color="white"
                    mt={1}
                  >
                    Additional Details for your Finance Organisation
                  </MDTypography>
                  <MDTypography
                    display="block"
                    variant="button"
                    color="white"
                    my={1}
                  >
                    Enter additional details about your finance organisation
                  </MDTypography>
                </MDBox>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <MDBox mb={2}>
                      <MDInput
                        type="text"
                        label="SME's GSTIN Number"
                        variant="standard"
                        onChange={(e) => setGstin(e.target.value)}
                        fullWidth
                      />
                      <MDButton
                        variant="outlined"
                        size="small"
                        color="primary"
                        onClick={handleGetCompanyDetails}
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "5px",
                          transform: "translateY(-50%)",
                        }}
                      >
                        Get Company Details
                      </MDButton>
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput
                        type="text"
                        label="Company Name"
                        variant="standard"
                        fullWidth
                        value={d?.cn || "Name from API"}
                        disabled
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput
                        type="text"
                        label="Address"
                        variant="standard"
                        fullWidth
                        value={d?.adr || "Address from API"}
                        disabled
                      />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" ml={-1}>
                      <Checkbox />
                      <MDTypography
                        variant="button"
                        fontWeight="regular"
                        color="text"
                        sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                      >
                        &nbsp;&nbsp;I agree the&nbsp;
                      </MDTypography>
                      <MDTypography
                        component="a"
                        href="#"
                        variant="button"
                        fontWeight="bold"
                        color="info"
                        textGradient
                      >
                        Terms and Conditions
                      </MDTypography>
                    </MDBox>
                    <MDBox mt={4} mb={1}>
                      <MDButton
                        variant="gradient"
                        color="info"
                        fullWidth
                        onClick={() => nav("/dasboard")}
                      >
                        Sign Up
                      </MDButton>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </>
            )}
            {/* Render 'Already have an account? Sign In' section */}
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </>
        )}
      </Card>
    </CoverLayout>
  );
}

export default Cover;
