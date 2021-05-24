import {
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  withStyles,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import React, { Component } from "react";
import User from "../../../Models/User";
import AdminService from "../../../services/AdminService";
import ApplicantService from "../../../services/ApplicantService";
import AdminDashboard from "../../Admin/AdminDashboard";
import BossCard from "../../BossCard";
import BossContainer from "../../BossContainer";

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

class ModifyUser extends Component {
  classes = this.props.classes;

  service = new AdminService();

  initialState = {
    id: "",
    email: "",
    password: "",
    userRole: "",
    createdOn: "",
    loading: false,
    error: undefined,
    success: undefined,
  };

  state = { ...this.initialState };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.service
      .getUser(userId)
      .then((res) => {
        console.log(res);
        const { id, email, password, userRole } = res;
        this.setState({
          ...this.initialState,
          id,
          email,
          password,
          userRole,
        });
      })
      .catch((err) => {
        const error = err.message.substring(
          err.message.indexOf("=") + 1,
          err.message.indexOf("]")
        );
        this.setState({
          success: "",
          error,
          loading: false,
        });
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(this.state);
    const { id, email, password, userRole } = this.state;
    const user = { id, email, password, userRole };
    console.log(user);
    this.setState({ loading: true });
    setTimeout(() => {
      this.service
        .updateUser(user)
        .then((res) => {
          console.log("RES:", res);
          this.setState({
            error: "",
            success: "User modified successfully!",
            loading: false,
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
    }, 2000);
  };
  render() {
    const { email, password, userRole, loading } = this.state;
    return (
      <AdminDashboard>
        <BossCard style={{ maxWidth: "600px" }}>
          <h1 style={{ textAlign: "center", margin: "1rem 0" }}>Modify User</h1>
          <hr />
          {this.state.success ? (
            <Alert severity="success">{this.state.success}</Alert>
          ) : null}
          {this.state.error ? (
            <Alert severity="error">{this.state.error}</Alert>
          ) : null}
          <form onSubmit={this.handleSubmit}>
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
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">User type</FormLabel>
              <RadioGroup
                aria-label="user-type"
                name="userRole"
                style={{ flexDirection: "row" }}
                onChange={this.handleChange}
                value={userRole}
              >
                <FormControlLabel
                  value="applicant"
                  control={<Radio required />}
                  label="Applicant"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio required />}
                  label="Admin"
                />
              </RadioGroup>
            </FormControl>
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
                "Update"
              )}
            </Button>
          </form>
        </BossCard>
      </AdminDashboard>
    );
  }
}

export default withStyles(styles)(ModifyUser);
