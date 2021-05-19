import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import BossContainer from "../BossContainer";
import { Link } from "react-router-dom";
import User from "../../Models/User";
import { CircularProgress } from "@material-ui/core";
import ApplicantService from "../../services/ApplicantService";
import Alert from '@material-ui/lab/Alert';


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

class SignUp extends Component {
  classes = this.props.classes;

  appService = new ApplicantService();

  initialState = {
    email: "",
    password: "",
    role: "applicant",
    loading: false,
    error: undefined,
    success: undefined,
  };

  state = { ...this.initialState };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(this.state);

    const user = new User(
      this.state.email,
      this.state.password,
      this.state.role
    );
    this.setState({ loading: true });
    setTimeout(() => {
      this.appService
        .signUp(user)
        .then((res) => {
          console.log("RES:", res);
          this.setState({
            ...this.initialState,
            success: "User register successfully!",
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
    const { email, password, loading } = this.state;
    return (
      <BossContainer component="main" maxWidth="xs">
        <CssBaseline />
        <p>
        {this.state.success ? (
              <Alert severity="success">{this.state.success}</Alert>
            ) : null}
        </p>
          <p>
            {this.state.error ? (
              <Alert severity="error">{this.state.error}</Alert>
            ) : null}
          </p>
        <div className={this.classes.paper}>
          <Avatar className={this.classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
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
                "Sign Up"
              )}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </BossContainer>
    );
  }
}

export default withStyles(styles)(SignUp);
