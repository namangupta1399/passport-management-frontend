import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

class Documents extends Component {
  handleChange = (e) => {
    this.props.handleChange(e, "documents");
  };

  render() {
    const { aadhaar, pan } = this.props.data;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Document
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="aadhaarvalue"
              name="aadhaar"
              label="Aadhaar Card Number"
              placeholder="xxxx xxxx xxxx"
              fullWidth
              autoComplete="aadhaar-card-no"
              value={aadhaar}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="pancardvalue"
              name="pan"
              label="Pan Card Number"
              placeholder="CDKPH3928N"
              fullWidth
              autoComplete="pan-card-no"
              value={pan}
              onChange={this.handleChange}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Documents;
