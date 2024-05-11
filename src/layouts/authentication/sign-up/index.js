import { useState } from "react";
import { Link } from "react-router-dom";
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

function FirstPage({ onNext }) {
  const [selectedType, setSelectedType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleNext = () => {
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
      if (selectedType === "SME") {
        onNext("SME");
      } else if (selectedType === "Bank") {
        onNext("Bank");
      }
    }
  };

  return (
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
        <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
          Join us today
        </MDTypography>
        <MDTypography display="block" variant="button" color="white" my={1}>
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
                Password must contain at least 8 characters with alphanumeric
                and symbols
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
              <MDTypography variant="button" fontWeight="regular" color="text">
                &nbsp;&nbsp;SME (loan requester)
              </MDTypography>
            </MDBox>
            <MDBox display="flex" alignItems="center">
              <Checkbox
                value="Bank"
                checked={selectedType === "Bank"}
                onChange={handleChange}
              />
              <MDTypography variant="button" fontWeight="regular" color="text">
                &nbsp;&nbsp;Banks/Organisations
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox mt={4} mb={1}>
            <MDButton
              variant="gradient"
              color="info"
              fullWidth
              onClick={handleNext}
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
  );
}

function SecondPage({ onNext, type }) {
  const handleNext = () => {
    onNext();
  };

  return (
    <>
      {type === "SME" && (
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
              onClick={() => window.location.reload()}
            >
              <ArrowBackIcon style={{ color: "white" }} />
            </IconButton>
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Additional Details for SME
            </MDTypography>
            <MDTypography display="block" variant="button" color="white" my={1}>
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
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Company Name"
                  variant="standard"
                  fullWidth
                  value="Name from API"
                  disabled
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Address"
                  variant="standard"
                  fullWidth
                  value="Address from API"
                  disabled
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Nature of Business"
                  variant="standard"
                  fullWidth
                  value="Nature of Business from API"
                  disabled
                />
              </MDBox>
              {/* <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Supplier of Services"
                  variant="standard"
                  fullWidth
                  value="Supplier of Services from API"
                  disabled
                />
              </MDBox> */}
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Company Age"
                  variant="standard"
                  fullWidth
                  value="Company Age from API"
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
                  onClick={handleNext}
                >
                  sign in
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </>
      )}
      {type === "Bank" && (
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
              onClick={() => window.location.reload()}
            >
              <ArrowBackIcon style={{ color: "white" }} />
            </IconButton>
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Additional Details for your Finance Organisation
            </MDTypography>
            <MDTypography display="block" variant="button" color="white" my={1}>
              Enter additional details about your finance organisation
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
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Company Name"
                  variant="standard"
                  fullWidth
                  value="Name from API"
                  disabled
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Address"
                  variant="standard"
                  fullWidth
                  value="Address from API"
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
                  onClick={handleNext}
                >
                  sign in
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
  );
}

function Cover() {
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNextPage = (type) => {
    setType(type);
    setPage(page + 1);
  };

  const handleFinalSubmit = () => {
    // Submit the form data
    console.log("Form data submitted successfully!");
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        {page === 1 && <FirstPage onNext={handleNextPage} />}
        {page === 2 && <SecondPage onNext={handleFinalSubmit} type={type} />}
        {/* Render pagination buttons */}
        {page === 1 && (
          <MDBox mt={3} display="flex" justifyContent="center">
            <MDBox
              component="div"
              width="20px"
              height="20px"
              borderRadius="50%"
              bgcolor="#bdbdbd"
              onClick={() => setPage(2)}
              style={{ cursor: "pointer" }}
            />
            <MDBox
              component="div"
              width="20px"
              height="20px"
              borderRadius="50%"
              bgcolor="#e0e0e0"
              mx={1}
            />
          </MDBox>
        )}
        {page === 2 && (
          <MDBox mt={3} display="flex" justifyContent="center">
            <MDBox
              component="div"
              width="20px"
              height="20px"
              borderRadius="50%"
              bgcolor="#e0e0e0"
              mx={1}
            />
            <MDBox
              component="div"
              width="20px"
              height="20px"
              borderRadius="50%"
              bgcolor="#bdbdbd"
              onClick={() => setPage(1)}
              style={{ cursor: "pointer" }}
            />
          </MDBox>
        )}
      </Card>
    </CoverLayout>
  );
}

export default Cover;
