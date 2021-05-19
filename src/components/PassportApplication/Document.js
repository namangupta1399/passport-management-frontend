import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function Document() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Document
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="aadhaarvalue"
            name="aadharvalue"
            label="Aadhaar Card Number"
            fullWidth
            autoComplete="aadhaar-card-no"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pancardvalue"
            name="pancardvalue"
            label="Pan Card Number"
            fullWidth
            autoComplete="pan-card-no"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}