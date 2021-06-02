import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";
import SendIcon from "@material-ui/icons/Send";
import ApplicantService from "../../../services/ApplicantService";
import { withRouter } from "react-router";
import BossCard from "../../BossCard";
import Alert from "@material-ui/lab/Alert";
import LoginService from "../../../services/LoginService";
import ApplicantDashboard from "../../Applicant/ApplicantDashboard";

class NewQuery extends Component {
  service = new ApplicantService();
  loginService = new LoginService();

  initialState = {
    query: "",
    error: undefined,
    success: undefined,
  };

  state = { ...this.initialState };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = this.loginService.isLoggedIn();
    const { query } = this.state;
    const data = { query, user: { id: user.id } };
    console.log(data);
    this.service
      .createHelpdeskQuery(data)
      .then((res) => {
        console.log("RES:", res);
        this.setState({
          ...this.initialState,
          success: "Query submitted successfully!",
        });
      })
      .catch((err) => {
        const error = err.message.substring(
          err.message.indexOf("=") + 1,
          err.message.indexOf("]")
        );
        this.setState({
          ...this.initialState,
          error,
        });
        console.log("ERR", error);
      });
  };

  render() {
    return (
      <ApplicantDashboard>
        <BossCard style={{ width: "100%", padding: "100px" }}>
          <h1 style={{ textAlign: "center" }}>Submit your query here</h1>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="query"
              label="Query"
              name="query"
              autoComplete="email"
              autoFocus
              value={this.state.query}
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </form>
          {this.state.success ? (
            <Alert severity="success">{this.state.success}</Alert>
          ) : null}
          {this.state.error ? (
            <Alert severity="error">{this.state.error}</Alert>
          ) : null}
        </BossCard>
      </ApplicantDashboard>
    );
  }
}

export default withRouter(NewQuery);
