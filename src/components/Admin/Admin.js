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
import AdminService from "../../services/AdminService";
import LoginService from "../../services/LoginService";
import BossCard from "../BossCard";
import AdminDashboard from "./AdminDashboard";

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

class Admin extends Component {
  classes = withStyles();
  adminService = new AdminService();
  loginService = new LoginService();

  state = {
    users: 0,
    applications: 0,
    passports: 0,
    queries: 0,
  };

  componentDidMount() {
    const userId = this.loginService.isLoggedIn().id;

    // Get applications
    this.adminService
      .getAllUsers()
      .then((res) => {
        console.log(res);
        this.setState({ users: res.length });
      })
      .catch((err) => {
        console.log(err);
      });

    // Get applications
    this.adminService
      .getAllPassportApplications()
      .then((res) => {
        console.log(res);
        this.setState({ applications: res.length });
      })
      .catch((err) => {
        console.log(err);
      });

    // Get passports
    this.adminService
      .getAllPassports()
      .then((res) => {
        console.log(res);
        this.setState({ passports: res.length });
      })
      .catch((err) => {
        console.log(err);
      });

    // Get all queries
    this.adminService
      .getAllHelpdeskQueries()
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
      fontSize: "2rem",
    },
    dataLabel: {
      fontWeight: "bold",
      fontSize: "20px",
      marginTop: "10px",
    },
  };

  dataContainer = (value, color) => {
    return (
      <div style={this.dataStyle.data} className={color}>
        {value}
      </div>
    );
  };

  dataList = () => {
    const { users, applications, passports, queries } = this.state;
    if (users > 0 || applications > 0 || passports > 0 || queries > 0) {
      const dataValue = [
        this.dataContainer(users, "bg-primary"),
        this.dataContainer(applications, "bg-danger"),
        this.dataContainer(passports, "bg-success"),
        this.dataContainer(queries, "bg-secondary"),
      ];

      const dataLabel = [
        "Users",
        "Applications",
        "Passports issued",
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
      <AdminDashboard>
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
            Admin Dashboard
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            This is the admin dashboard to navigate through admin operations.
          </Typography>
          {this.dataList()}
        </BossCard>
      </AdminDashboard>
    );
  }
}

export default withStyles(styles)(Admin);
