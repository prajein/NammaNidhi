import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Icon from "@mui/material/Icon";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LoanOffers from "layouts/loanoffers";
import SMEFillCard from "layouts/dashboard/components/SMEFillCard";
import SMEProfile from "layouts/SMEDetails";
import Borrowers from "layouts/borrowers";
import LoanApplication from "layouts/Applyloan";
import DashboardBank from "layouts/dashboardbank";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Loan Offers",
    key: "loanoffers",
    icon: <AccountBalanceIcon></AccountBalanceIcon>,
    route: "/loanoffers",
    component: <LoanOffers />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Log Out",
    key: "log-out",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    name: "SME Fill up",
    route: "/smefillup",
    key: "sme-fill",
    component: <SMEProfile />,
  },
  {
    name: "Loan Application",
    route: "/applyloan",
    component: <LoanApplication />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard-bank",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboardbank",
    component: <DashboardBank />,
  },
  {
    type: "collapse",
    name: "Borrowers",
    key: "borrowers",
    icon: <AccountBalanceIcon></AccountBalanceIcon>,
    route: "/borrowersinfo",
    component: <Borrowers />,
  }
];

export default routes;
