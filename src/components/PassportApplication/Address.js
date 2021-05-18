import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function Address() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="houseNo"
            name="houseNo"
            label="House Number"
            fullWidth
            autoComplete="house-no"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="street"
            name="street"
            label="Street"
            fullWidth
            autoComplete="street"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl style={{width:"100%"}}>
            <InputLabel>State</InputLabel>
                <Select
                    value=""
                    required
                    >
                    <MenuItem value={10}>Delhi</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pincode"
            name="pincode"
            label="Pin Code"
            fullWidth
            autoComplete="pin-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobileno"
            name="mobileno"
            label="Mobile Number"
            fullWidth
            autoComplete="mobile-no"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}