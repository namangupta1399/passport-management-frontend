import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import BossContainer from "../BossContainer";
import { Link } from "react-router-dom";
import User from "../../Models/User";
import { signUp } from "../../services/ApplicantService";
import { CircularProgress } from "@material-ui/core";
import ApplicantService from "../../services/ApplicantService"

class SignUp extends Component {

  appService = new ApplicantService();

  initialState = {
    email: "",
    password: "",
    role: "applicant",
    loading: false,
    error: undefined,
    success: undefined
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
      this.appService.signUp(user)
        .then((res) => {
          console.log("RES:", res);
          this.setState({ ...this.initialState, success: "User register successfully!" });
        })
        .catch((err) => {
          console.log("ERR", err);
          this.setState({ success: "", error: err.message, loading: false });
        });
    }, 2000);
  };

  render() {
    const { email, password, role, loading } = this.state;
    // console.log(this.props);
    return (
      <BossContainer component="main" maxWidth="xs">
        <CssBaseline />
        <div className="">
          <Avatar className="">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className="" noValidate onSubmit={this.handleSubmit}>
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
              className=""
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
          <p>{this.state.success}</p>
          <p>{this.state.error}</p>
        </div>
      </BossContainer>
    );
  }
}

export default SignUp;
