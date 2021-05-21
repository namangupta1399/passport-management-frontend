import {
  Avatar,
  Button,
  CircularProgress,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { Component } from "react";
import BossContainer from "../BossContainer";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LoginService from "../../services/LoginService";
import User from "../../Models/User";
import ApplicantService from "../../services/ApplicantService";
import BossCard from "../BossCard";
import { withRouter } from "react-router";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class UserProfile extends Component {
  loginService = new LoginService();
  applicantService = new ApplicantService();

  classes = this.props.classes;

  state = {
    id: "",
    email: "",
    password: "",
    userRole: "",
    loading: "",
    success: undefined,
    error: undefined,
  };

  componentDidMount() {
    const user = this.loginService.isLoggedIn();
    if(user === null) {
      this.props.history.push("/signin");
    }

    console.log(user);
    const { id, email, password, userRole } = user;
    this.setState({
      id,
      email,
      password,
      userRole,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { id, email, password, userRole } = this.state;
    const user = {
      id,
      email,
      password,
      userRole,
    };

    this.applicantService
      .updateUser(user)
      .then((res) => {
        console.log("RES:", res);
        this.setState({
          error: "",
          success: "Profile updated successfully!",
        });
      })
      .catch((err) => {
        console.log("ERR", err);
        const error = err.message.substring(
          err.message.indexOf("=") + 1,
          err.message.indexOf("]")
        );
        this.setState({ success: "", error: error, loading: false });
      });
  };

  render() {
    const { email, password, loading } = this.state;
    return (
      <BossContainer component="main" maxWidth="xs">
        <CssBaseline />
        <BossCard style={{maxWidth: '600px'}} flex>
          {this.state.success ? (
            <Alert severity="success">{this.state.success}</Alert>
          ) : null}
          {this.state.error ? (
            <Alert severity="error">{this.state.error}</Alert>
          ) : null}
          <Avatar className={this.classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            My Profile
          </Typography>
          <form
            className={this.classes.form}
            noValidate
            onSubmit={this.handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={this.handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}
              size="large"
            >
              {loading ? (
                <CircularProgress style={{ color: "#fff" }} />
              ) : (
                "Update details"
              )}
            </Button>
          </form>
        </BossCard>
      </BossContainer>
    );
  }
}

export default withRouter(withStyles(styles)(UserProfile));
