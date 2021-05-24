import React from "react";
import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import backgroundImage from "../../assets/images/header.webp";
import logo from "../../assets/images/hop_logo_new.png";
import LoginService from "../../services/LoginService";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    background: "#000000",
    color: "white",
    backgroundImage:
      "linear-gradient(45deg, black 28%, transparent 54%), linear-gradient(45deg, #000 25%, #DBAA33)",
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    margin: "0 10px",
  },
}));

const currentTab = (history, path) => {
  if (
    history.location.pathname === path ||
    (path.includes("/applicant") &&
      history.location.pathname.includes("/applicant")) ||
    (path.includes("/admin") && history.location.pathname.includes("/admin"))
  ) {
    return "active";
  }
};

const Navbar = ({ history }) => {
  const classes = useStyles();
  const loginService = new LoginService();
  const { isLoggedIn, signout } = loginService;
  return (
    <div id="navbar" className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar style={{ boxShadow: "0 2px 2px 0px #fff", zIndex: 9 }}>
          <img src={logo} alt="Logo" style={{ width: "17rem" }} />
          <Container style={{ display: "flex" }}>
            <Typography variant="h6" className={classes.title}>
              {/* House of Passports */}
            </Typography>
            {isLoggedIn() && (
              <Link
                className={`nav-link ${currentTab(
                  history,
                  `${
                    isLoggedIn().userRole === "applicant"
                      ? "/applicant"
                      : "/admin"
                  }`
                )}`}
                to={`${
                  isLoggedIn().userRole === "applicant"
                    ? "/applicant"
                    : "/admin"
                }`}
              >
                Dashboard
              </Link>
            )}
            <Link className={`nav-link ${currentTab(history, "/")}`} to="/">
              Home
            </Link>
            <Link
              className={`nav-link ${currentTab(history, "/about")}`}
              to="/about"
            >
              About Us
            </Link>
            {!isLoggedIn() && (
              <>
                <Link
                  className={`nav-link ${currentTab(history, "/signin")}`}
                  to="/signin"
                >
                  Sign In
                </Link>
                <Link
                  className={`nav-link ${currentTab(history, "/signup")}`}
                  to="/signup"
                >
                  Sign Up
                </Link>
              </>
            )}
            <Link
              className={`nav-link ${currentTab(history, "/contact")}`}
              to="/contact"
            >
              Contact Us
            </Link>
            {isLoggedIn() && (
              <Link
                className={`nav-link`}
                variant="contained"
                onClick={() => {
                  signout(() => {
                    history.push("/");
                  });
                }}
              >
                Signout
              </Link>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
