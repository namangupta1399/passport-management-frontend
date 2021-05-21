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
import { FormControl, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import LoginService from "../../services/LoginService";
import User from "../../Models/User";
import BossCard from "../BossCard";

const styles = (theme) => ({
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
  };

  state = { ...this.initialState };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);

    const user = new User(
      this.state.email,
      this.state.password,
      this.state.userRole
    );
    this.setState({ loading: true });
    setTimeout(() => {
      this.loginService
        .signIn(user)
        .then((res) => {
          console.log("RES:", res);
          this.setState({
            ...this.initialState,
          });
        })
        .catch((err) => {
          const error = err.message.substring(
            err.message.indexOf("=") + 1,
            err.message.indexOf("]")
          );
          console.log("ERR", error);
          this.setState({ loading: false });
        });
    }, 2000);
  };

  render() {
    let classes = this.props.classes;
    const { email, password, userRole } = this.state;
    return (
      <BossContainer>
        <CssBaseline />
        <BossCard style={{ maxWidth: "500px" }} flex>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <TextField
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
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
              value={password}
            />
            <Grid container spacing={3}>
              <Grid item xs={7}>
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
              </Grid>
              <Grid
                item
                xs={5}
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
            <div className="text-center">
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </div>
          </form>
        </BossCard>
      </BossContainer>
    );
  }
}

export default withStyles(styles)(SignIn);
