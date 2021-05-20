import {
  Button,
  Card,
  FormGroup,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";
import SendIcon from "@material-ui/icons/Send";

class ResponseForm extends Component {
  render() {
    const query = this.props.query;
    // console.log(query);
    return (
      <Card>
        <h2 style={{ textAlign: "center" }}>Query {query.helpdeskId}</h2>
        <h4>Query: {query.query}</h4>
        <form onSubmit={this.props.handleSubmit}>
          <FormGroup>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Enter your solution here..."
              name="solution"
              onChange={this.props.updateSolution}
              rowsMin={3}
              required
            />
          </FormGroup>
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            endIcon={<SendIcon />}
            style={{ marginTop: "1rem" }}
          >
            Send
          </Button>
        </form>
      </Card>
    );
  }
}

export default ResponseForm;
