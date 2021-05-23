import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginService from "../../services/LoginService";
import BossCard from "../BossCard";
import ApplicantDashboard from "./ApplicantDashboard";

const drawerWidth = 240;

const styles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
});

class Applicant extends Component {
  classes = withStyles();
  loginService = new LoginService();

  render() {
    const classes = this.props.classes;
    const user = this.loginService.isLoggedIn();
    const username = user.email.split("@")[0];
    return (
      <ApplicantDashboard>
        <BossCard style={{ padding: "4rem 0", width: "100%" }}>
          <h4
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              margin: "1rem 0 0 1rem",
              fontStyle: "italic",
            }}
          >
            Welcome {username}
          </h4>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Applicant Dashboard
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            This is the applicant dashboard to navigate through applicant
            operations.
          </Typography>
        </BossCard>
      </ApplicantDashboard>
    );
  }
}

export default withStyles(styles)(Applicant);
