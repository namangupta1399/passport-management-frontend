import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import BossContainer from "../BossContainer";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import LoginService from "../../services/LoginService";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends Component {
  loginService = new LoginService();

  initialState = {
    email: "",
    password: "",
    userRole: "",
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
    console.log(this.state);

    // const user = new User(
    //   this.state.email,
    //   this.state.password,
    //   this.state.role
    // // );
    // this.setState({ loading: true });
    // setTimeout(() => {
    //   this.appService
    //     .signUp(user)
    //     .then((res) => {
    //       console.log("RES:", res);
    //       this.setState({
    //         ...this.initialState,
    //         success: "User register successfully!",
    //       });
    //     })
    //     .catch((err) => {
    //       console.log("ERR", err);
    //       const error = err.message.substring(
    //         err.message.indexOf("=") + 1,
    //         err.message.indexOf("]")
    //       );
    //       this.setState({ success: "", error: error, loading: false });
    //     });
    // }, 2000);
  };

  render() {
    let classes = this.props.classes;
    return (
      <BossContainer component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={this.handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">User type</FormLabel>
                  <RadioGroup
                    aria-label="user-type"
                    name="userRole"
                    style={{ flexDirection: "row" }}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      value="applicant"
                      control={<Radio />}
                      label="Applicant"
                    />
                    <FormControlLabel
                      value="admin"
                      control={<Radio />}
                      label="Admin"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </BossContainer>
    );
  }
}

export default withStyles(styles)(SignIn);
