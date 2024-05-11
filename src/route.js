import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Icon from "@mui/material/Icon";
import SMEProfile from "layouts/SMEDetails";

const routes = [
  {
    type: "collapse",
    name: "Log Out",
    key: "log-out",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    // type: "collapse",
    // name: "Sign Up",
    // key: "sign-up",
    // icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    route: "/smefillup", 
    component: <SMEProfile />
  } 
];

export default routes;
