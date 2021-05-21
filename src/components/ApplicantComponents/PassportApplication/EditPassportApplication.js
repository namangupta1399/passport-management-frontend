import {
  Button,
  CssBaseline,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApplicantService from "../../../services/ApplicantService";
import PersonalInformation from "./PersonalInformation";
import Address from "./Address";
import Document from "./Document";
import DocumentDTO from "../../../Models/DocumentDTO";
import AddressDTO from "../../../Models/AddressDTO";
import PassportApplicationDTO from "../../../Models/PassportApplicationDTO";
import BossContainer from "../../BossContainer";
import Alert from "@material-ui/lab/Alert";
import LoginService from "../../../services/LoginService";
import BossCard from "../../BossCard";

const styles = (theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

const steps = ["Personal Information", "Contact Details", "Documents"];

class EditPassportApplication extends Component {
  classes = withStyles();

  appService = new ApplicantService();
  loginService = new LoginService();

  initialState = {
    activeStep: 0,
    application: undefined,
    personalInfo: {
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      placeOfBirth: "",
      maritalStatus: "",
      isIndian: true,
      employmentType: "",
      educationalQualification: "",
    },
    address: {
      houseNo: "",
      street: "",
      state: "",
      district: "",
      pinCode: "",
      mobileNo: "",
    },
    documents: {
      aadhaar: "",
      pan: "",
    },
    user: {
      id: "",
    },
    applicationStatus: "",
    loading: false,
    success: undefined,
    error: undefined,
  };

  state = { ...this.initialState };

  componentDidMount() {
    const currentUser = this.loginService.getCurrentUser();
    this.appService.getPassportApplicationByUser(currentUser.id)
    .then((res) => {
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
        address,
        documents,
        applicationStatus,
        user,
      } = res;
      const dob = dateOfBirth.substring(0, 10); // Updated format
      console.log(dob);
      this.setState({
        application: { ...res },
        personalInfo: {
          firstName,
          middleName,
          lastName,
          gender,
          dateOfBirth: dob,
          placeOfBirth,
          maritalStatus,
          isIndian,
          employmentType,
          educationalQualification,
        },
        address,
        documents: {
          aadhaar: documents[0].documentValue,
          pan: documents[1].documentValue,
        },
        applicationStatus,
        user,
      });
    })
    .catch(err => {
      console.log(err);
      this.props.history.push("/applicant/passportApplication/new");
    })
  }

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalInformation
            data={this.state.personalInfo}
            handleChange={this.handleChange}
          />
        );
      case 1:
        return (
          <Address data={this.state.address} handleChange={this.handleChange} />
        );
      case 2:
        return (
          <Document
            data={this.state.documents}
            handleChange={this.handleChange}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  handleNext = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        activeStep: prevState.activeStep + 1,
      };
    });
  };

  handleBack = () => {
    this.setState((prevState) => {
      return {
        activeStep: prevState.activeStep - 1,
      };
    });
  };

  handleChange = (e, form) => {
    this.setState((prevState) => {
      if (form === "personalInfo") {
        return {
          personalInfo: {
            ...prevState.personalInfo,
            [e.target.name]: e.target.value,
          },
        };
      }
      if (form === "address") {
        return {
          address: {
            ...prevState.address,
            [e.target.name]: e.target.value,
          },
        };
      }
      if (form === "documents") {
        return {
          documents: {
            ...prevState.documents,
            [e.target.name]: e.target.value,
          },
        };
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);

    const user = this.loginService.getCurrentUser();

    const { application } = this.state;
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
    } = this.state.personalInfo;

    const { houseNo, street, state, district, pinCode, mobileNo } =
      this.state.address;

    application.firstName = firstName;
    application.middleName = middleName;
    application.lastName = lastName;
    application.gender = gender;
    application.dateOfBirth = dateOfBirth;
    application.placeOfBirth = placeOfBirth;
    application.maritalStatus = maritalStatus;
    application.isIndian = isIndian;
    application.employmentType = employmentType;
    application.educationalQualification = educationalQualification;

    application.documents[0].documentValue = this.state.documents.aadhaar;
    application.documents[1].documentValue = this.state.documents.pan;
    application.user = { id: user.id };
    application.address.houseNo = houseNo;
    application.address.street = street;
    application.address.state = state;
    application.address.district = district;
    application.address.pinCode = pinCode;
    application.address.mobileNo = mobileNo;

    console.log(application);
    // return;

    this.appService
      .updatePassportApplication(application)
      .then((res) => {
        console.log("RES:", res);
        this.setState({
          activeStep: 0,
          error: "",
          success: "Application updated successfully!",
        });
      })
      .catch((err) => {
        console.log("ERR", err);
        const error = err.message.substring(
          err.message.indexOf("=") + 1,
          err.message.indexOf("]")
        );
        this.setState({ success: "", error: error, loading: false });
      });
  };

  render() {
    const classes = this.props.classes;
    let activeStep = this.state.activeStep;

    return (
      <BossContainer>
        <CssBaseline />
        <form
          onSubmit={
            activeStep === steps.length - 1
              ? this.handleSubmit
              : this.handleNext
          }
        >
          <main className={classes.layout}>
            <BossCard>
            {this.state.success ? (
          <Alert severity="success">{this.state.success}</Alert>
        ) : null}
        {this.state.error ? (
          <Alert severity="error">{this.state.error}</Alert>
        ) : null}
              <Typography component="h1" variant="h4" align="center">
                Edit Passport Application
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {this.getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={this.handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  {activeStep === steps.length - 1
                    ? "Submit Application"
                    : "Next"}
                </Button>
              </div>
            </BossCard>
          </main>
        </form>
        <h1>{this.state.loading ? "Loading..." : null}</h1>
      </BossContainer>
    );
  }
}

export default withStyles(styles)(EditPassportApplication);
