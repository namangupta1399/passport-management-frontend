import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Radio } from "@material-ui/core";

class PersonalInformation extends Component {

  handleChange = e => {
    this.props.handleChange(e, 'personalInfo');
  };

  render() {
    const {
      firstName,
      middleName,
      lastName,
      gender,
      dateOfBirth,
      placeOfBirth,
      maritalStatus,
      isIndian,
      employmentType,
      educationalQualification,
    } = this.props.data;

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              value={firstName}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              id="middleName"
              name="middleName"
              label="Middle name"
              fullWidth
              autoComplete="middle-name"
              value={middleName}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              value={lastName}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset" required>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={gender}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio required />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio required />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio required />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              // label="Date of Birth"
              fullWidth
              autoComplete=""
              value={dateOfBirth}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="text"
              id="placeOfBirth"
              name="placeOfBirth"
              label="Place of Birth"
              fullWidth
              autoComplete=""
              value={placeOfBirth}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl style={{ width: "100%" }}>
              <InputLabel>Maritial Status</InputLabel>
              <Select
                value={maritalStatus}
                name="maritalStatus"
                onChange={this.handleChange}
                type="select"
                required
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Divorced">Divorced</MenuItem>
                <MenuItem value="Widowed">Widowed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset" required>
              <FormLabel component="legend">is Indian</FormLabel>
              <RadioGroup
                aria-label="isIndian"
                name="isIndian"
                value={isIndian.toString()}
                onChange={this.handleChange}
              >
                <FormControlLabel value="true" control={<Radio required />} label="Yes" />
                <FormControlLabel value="false" control={<Radio required />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl style={{ width: "100%" }}>
              <InputLabel>Employment Type</InputLabel>
              <Select
                value={employmentType}
                name="employmentType"
                onChange={this.handleChange}
              >
                <MenuItem value="Self Employed">Self Employed</MenuItem>
                <MenuItem value="Government">Government</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Retired">Retired</MenuItem>
                <MenuItem value="Student">Student</MenuItem>
                <MenuItem value="Homemaker">Homemaker</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl style={{ width: "100%" }}>
              <InputLabel>Eductional Qualifiation</InputLabel>
              <Select
                value={educationalQualification}
                name="educationalQualification"
                onChange={this.handleChange}
              >
                <MenuItem value="Metric">Metric</MenuItem>
                <MenuItem value="Senior Secondary">Senior Secondary</MenuItem>
                <MenuItem value="Graduate">Graduate</MenuItem>
                <MenuItem value="Post Graduate">Post Graduate</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default PersonalInformation;
