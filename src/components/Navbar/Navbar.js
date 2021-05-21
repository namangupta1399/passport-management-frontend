import React from "react";
import Logo from "./Logo.jpg";
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

const Navbar = (props) => {
  const classes = useStyles();
  const loginService = new LoginService();
  const { isLoggedIn, signout } = loginService;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar style={{ boxShadow: "0 2px 2px 0px #fff", zIndex: 9 }}>
          <img src={logo} alt="Logo" style={{ width: "17rem" }} />
          <Container style={{ display: "flex" }}>
            <Typography variant="h6" className={classes.title}>
              {/* House of Passports */}
            </Typography>
            <Button
              className={classes.btn}
              to="/"
              component={Link}
              color="inherit"
            >
              Home
            </Button>
            <Button
              className={classes.btn}
              to="/about"
              component={Link}
              color="inherit"
            >
              About Us
            </Button>
            {!isLoggedIn() && (
              <>
                <Button
                  className={classes.btn}
                  to="/signin"
                  component={Link}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  className={classes.btn}
                  component={Link}
                  to="/signup"
                  variant="contained"
                >
                  REGISTER
                </Button>
              </>
            )}
            {isLoggedIn() && (
              <Button
                className={classes.btn}
                variant="contained"
                onClick={() => {
                  signout(() => {
                    props.history.push("/");
                  });
                }}
              >
                Signout
              </Button>
            )}
            <Button
              className={classes.btn}
              to="/contact"
              component={Link}
              color="inherit"
            >
              Contact Us
            </Button>
            <Button
              className={classes.btn}
              to="/sitemap"
              component={Link}
              color="inherit"
            >
              Sitemap
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
