import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class Address extends Component {

  handleChange = e => {
    this.props.handleChange(e, 'address');
  };

  render() {
    const { houseNo, street, state, district, pinCode, mobileNo } = this.props.data;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="houseNo"
              name="houseNo"
              label="House Number"
              fullWidth
              autoComplete="house-no"
              value={houseNo}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="street"
              name="street"
              label="Street"
              fullWidth
              autoComplete="street"
              value={street}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl style={{ width: "100%" }}>
              <InputLabel>State</InputLabel>
              <Select type="select" name="state" value={state} onChange={this.handleChange} required>
                <MenuItem value="Delhi">Delhi</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="district"
              name="district"
              label="District"
              fullWidth
              autoComplete="district"
              value={district}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="pincode"
              name="pinCode"
              label="Pin Code"
              fullWidth
              autoComplete="pin-code"
              value={pinCode}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="mobileno"
              name="mobileNo"
              label="Mobile Number"
              fullWidth
              autoComplete="mobile-no"
              value={mobileNo}
              onChange={this.handleChange}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Address;
