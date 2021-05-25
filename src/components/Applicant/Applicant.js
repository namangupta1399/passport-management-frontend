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
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import ApplicantService from "../../services/ApplicantService";

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
  applicantService = new ApplicantService();
  loginService = new LoginService();

  state = {
    application: undefined,
    passport: undefined,
    queries: 0,
  };

  componentDidMount() {
    const userId = this.loginService.isLoggedIn().id;

    // Get application
    this.applicantService
      .getPassportApplicationByUser(userId)
      .then((res) => {
        console.log(res);
        this.setState({ application: res });
      })
      .catch((err) => {
        console.log(err);
      });

    // Get passport
    this.applicantService
      .getPassport(userId)
      .then((res) => {
        console.log(res);
        this.setState({ passport: res });
      })
      .catch((err) => {
        console.log(err);
      });

    // Get queries
    this.applicantService
      .getAllHelpdeskQueries(userId)
      .then((res) => {
        this.setState({ queries: res.length });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  dataStyle = {
    dataRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    dataBlock: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    data: {
      width: "120px",
      height: "120px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      color: "#fff",
      fontSize: '2rem'
    },
    dataLabel: {
      fontWeight: "bold",
      fontSize: "20px",
      marginTop: "10px",
    },
  };

  dataCheck = (value) => {
    return value
      ? this.dataContainer(
          <CheckIcon style={{ fontSize: "3rem" }} />,
          "bg-success"
        )
      : this.dataContainer(
          <ClearIcon style={{ fontSize: "3rem" }} />,
          "bg-danger"
        );
  };

  dataContainer = (value, color) => {
    return (
      <div style={this.dataStyle.data} className={color}>
        {value}
      </div>
    );
  };

  dataList = () => {
    if (this.state.application && this.state.passport) {
      const { application, passport } = this.state;
      const { applicationStatus, documents } = application;
      const documentStatus = documents[0].isVerified && documents[1].isVerified;

      console.log(applicationStatus, documentStatus);

      const dataValue = [
        this.dataCheck(documentStatus),
        this.dataCheck(applicationStatus),
        this.dataCheck(passport),
        this.dataContainer(this.state.queries, "bg-secondary"),
      ];

      const dataLabel = [
        "Document Status",
        "Application Status",
        "Passport issued",
        "Queries",
      ];

      return (
        <div style={this.dataStyle.dataRow} className="mt-5">
          {dataLabel.map((label, index) => {
            return (
              <div style={this.dataStyle.dataBlock}>
                {dataValue[index]}
                <div style={this.dataStyle.dataLabel}>{label}</div>
              </div>
            );
          })}
        </div>
      );
    }
  };

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
            Welcome {username} !
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
          {this.dataList()}
        </BossCard>
      </ApplicantDashboard>
    );
  }
}

export default withStyles(styles)(Applicant);
