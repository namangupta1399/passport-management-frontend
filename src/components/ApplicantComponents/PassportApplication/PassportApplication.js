import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Checkbox,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import AdminService from "../../../services/AdminService";
import BossContainer from "../../BossContainer";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import DocumentStatus from "../../../Models/DocumentStatus";
import { Redirect, withRouter } from "react-router";
import LoginService from "../../../services/LoginService";
import ApplicantService from "../../../services/ApplicantService";
import BossCard from "../../BossCard";
import ApplicantDashboard from "../../Applicant/ApplicantDashboard";
import { Link } from "react-router-dom";

class PassportApplication extends Component {
  applicantService = new ApplicantService();
  loginservice = new LoginService();

  state = {
    application: {
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
      applicationStatus: undefined,
    },
    expanded: "panel1",
  };

  componentDidMount() {
    const userId = this.loginservice.isLoggedIn().id;

    this.applicantService
      .getPassportApplicationByUser(userId)
      .then((res) => {
        console.log(res);
        this.setState({ application: res });
      })
      .catch((err) => {
        console.log(err);
        this.props.history.push("/applicant/passportApplication/new");
      });
  }

  handleChange = (value) => {
    this.setState({ expanded: value });
  };

  handleSwitch = (docId, status) => {
    const docs = [...this.state.application.documents];

    const docStatus = new DocumentStatus(docId, status);
    this.service
      .updateDocumentStatus(docStatus)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    docs.forEach((doc) => {
      if (doc.documentId === docId) {
        doc.isVerified = status;
      }
    });
    this.setState((prevState) => {
      return {
        ...prevState,
        aplication: {
          ...prevState.application,
          documents: [...docs],
        },
      };
    });
  };

  renderApplication = () => {
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
      address,
      documents,
      applicationStatus,
    } = application;
    const { houseNo, street, state, district, pinCode, mobileNo } = address;
    const { expanded } = this.state;
    return (
      <div className="d-flex flex-column">
        <Paper elevation={3} style={{ padding: "1rem" }}>
          <h1>
            Passport Application - {firstName} {lastName}
          </h1>
          <hr />
          <div>
            <Accordion
              square
              expanded={expanded === "panel1"}
              onChange={this.handleChange.bind(this, "panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography># Personal Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>First name</TableCell>
                        <TableCell>Middle name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Date Of Birth</TableCell>
                        <TableCell>Place Of Birth</TableCell>
                        <TableCell>Marital Status</TableCell>
                        <TableCell>isIndian</TableCell>
                        <TableCell>Employment Type</TableCell>
                        <TableCell>Educational Qualification</TableCell>
                        <TableCell>Application status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{firstName}</TableCell>
                        <TableCell>{middleName}</TableCell>
                        <TableCell>{lastName}</TableCell>
                        <TableCell>{gender}</TableCell>
                        <TableCell>{dateOfBirth}</TableCell>
                        <TableCell>{placeOfBirth}</TableCell>
                        <TableCell>{maritalStatus}</TableCell>
                        <TableCell align="center">
                          {isIndian ? (
                            <CheckCircleOutlineRoundedIcon
                              style={{ color: "#0f0" }}
                            />
                          ) : (
                            <CancelRoundedIcon color="error" />
                          )}
                        </TableCell>
                        <TableCell>{employmentType}</TableCell>
                        <TableCell>{educationalQualification}</TableCell>
                        <TableCell align="center">
                          {applicationStatus ? (
                            <CheckCircleOutlineRoundedIcon
                              style={{ color: "#0f0" }}
                            />
                          ) : (
                            <CancelRoundedIcon color="error" />
                          )}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion
              square
              expanded={expanded === "panel2"}
              onChange={this.handleChange.bind(this, "panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography># Address</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>House no</TableCell>
                        <TableCell>Street</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>District</TableCell>
                        <TableCell>Pin code</TableCell>
                        <TableCell>Mobile no</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{houseNo}</TableCell>
                        <TableCell>{street}</TableCell>
                        <TableCell>{state}</TableCell>
                        <TableCell>{district}</TableCell>
                        <TableCell>{pinCode}</TableCell>
                        <TableCell>{mobileNo}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion
              square
              expanded={expanded === "panel3"}
              onChange={this.handleChange.bind(this, "panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography># Documents</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Document name</TableCell>
                        <TableCell>Document value</TableCell>
                        <TableCell>isVerified</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {documents.length > 0
                        ? documents.map((document) => (
                            <TableRow key={document.documentId}>
                              <TableCell>{document.documentName}</TableCell>
                              <TableCell>{document.documentValue}</TableCell>
                              <TableCell>
                                {document.isVerified ? (
                                  <CheckCircleOutlineRoundedIcon
                                    style={{ color: "#0f0" }}
                                  />
                                ) : (
                                  <CancelRoundedIcon color="error" />
                                )}
                              </TableCell>
                            </TableRow>
                          ))
                        : null}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* {JSON.stringify(this.state.application)} */}
        </Paper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/applicant/passport"
          >
            View Passport
          </Button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <ApplicantDashboard>
        {this.state.application ? (
          this.renderApplication()
        ) : (
          <BossCard style={{ width: "100%" }}>
            <h1 className="text-center py-5 my-5">No application found!</h1>
          </BossCard>
        )}
      </ApplicantDashboard>
    );
  }
}

export default withRouter(PassportApplication);
