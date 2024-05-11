import PropTypes from "prop-types";
import MDButton from "components/MDButton";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function SMEFillCard({ color, icon, title, description, value }) {
  return (
    <Card>
      <MDBox p={2} mx={3} display="flex" justifyContent="center">
        <Icon color={color} fontSize="large">
          {icon}
        </Icon>
      </MDBox>
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
        <MDBox display="flex" justifyContent="center" py={1}>
          <a href="/smefillup" style={{ textDecoration: "none" }}>
            <MDButton variant="contained" color="primary">
              Complete Finishing Details
            </MDButton>
          </a>
        </MDBox>
      </MDBox>
    </Card>
  );
}

SMEFillCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

SMEFillCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SMEFillCard;
