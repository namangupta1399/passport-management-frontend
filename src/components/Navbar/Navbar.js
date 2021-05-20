import React from "react";
import Logo from './Logo.jpg';
import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#000000",
    color: "white",
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    margin: "0 10px",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
        <img src={Logo} alt="Logo" className={classes.logo} />
          <Container style={{display: 'flex'}}>
            <Typography variant="h6" className={classes.title}>
              {/* House of Passports */}
            </Typography>
            <Button className={classes.btn} href="/" color="inherit">
              Home
            </Button>
            <Button className={classes.btn} href="/about" color="inherit">
              About Us
            </Button>
            <Button className={classes.btn} href="/login" variant="contained">
              Login
            </Button>
            <Button
              className={classes.btn}
              href="/register"
              variant="contained"
            >
              REGISTER
            </Button>
            <Button className={classes.btn} href="/contact" color="inherit">
              Contact Us
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
