import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";
import BossContainer from "../../BossContainer";
import SendIcon from "@material-ui/icons/Send";
import ApplicantService from "../../../services/ApplicantService";
import { withRouter } from "react-router";
import BossCard from "../../BossCard";

class NewQuery extends Component {
  service = new ApplicantService();

  initialState = {
    query: "",
  };

  state = { ...this.initialState };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    const data = { query, user: { id: 1 } };
    console.log(data);
    this.service
      .createHelpdeskQuery(data)
      .then((res) => {
        console.log("RES:", res);
        this.props.history.push("/applicant/helpdesk");
      })
      .catch((err) => {
        const error = err.message.substring(
          err.message.indexOf("=") + 1,
          err.message.indexOf("]")
        );
        console.log("ERR", error);
      });
  };

  render() {
    return (
      <BossContainer>
        <BossCard style={{maxWidth: '900px', padding: '100px'}}>
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
        </BossCard>
      </BossContainer>
    );
  }
}

export default withRouter(NewQuery);
