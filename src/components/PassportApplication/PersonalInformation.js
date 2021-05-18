import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Radio } from '@material-ui/core';

export default function PersonalInformation() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="middleName"
            name="middleName"
            label="Middle name"
            fullWidth
            autoComplete="middle-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl 
        component="fieldset"
        required>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="date"
            id="dateofbirth"
            name="dateofbirth"
            // label="Date of Birth"
            fullWidth
            autoComplete=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="placeofbirth"
            name="placeofbirth"
            label="Place of Birth"
            fullWidth
            autoComplete=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <FormControl style={{width:"100%"}}>
            <InputLabel>Maritial Status</InputLabel>
                <Select
                    value=""
                    required
                    >
                    <MenuItem value={10}>Single</MenuItem>
                    <MenuItem value={20}>Married</MenuItem>
                    <MenuItem value={30}>Divorced</MenuItem>
                    <MenuItem value={30}>Widowed</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl 
        component="fieldset"
        required>
        <FormLabel component="legend">is Indian</FormLabel>
        <RadioGroup aria-label="isIndian" name="yes">
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl style={{width:"100%"}}>
            <InputLabel>Employment Type</InputLabel>
                <Select
                    value="">
                    <MenuItem value={10}>Self Employed</MenuItem>
                    <MenuItem value={20}>Government</MenuItem>
                    <MenuItem value={30}>Private</MenuItem>
                    <MenuItem value={40}>Retired</MenuItem>
                    <MenuItem value={50}>Student</MenuItem>
                    <MenuItem value={60}>Homemaker</MenuItem>
                    <MenuItem value={70}>Others</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl style={{width:"100%"}}>
            <InputLabel>Eductional Qualifiation</InputLabel>
                <Select
                    value="">
                    <MenuItem value={10}>Metric</MenuItem>
                    <MenuItem value={20}>Senior Secondary</MenuItem>
                    <MenuItem value={30}>Graduate</MenuItem>
                    <MenuItem value={40}>Post Graduate</MenuItem>
                    <MenuItem value={50}>Others</MenuItem>
                </Select>
            </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}