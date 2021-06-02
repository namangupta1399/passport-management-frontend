import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Paper,
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
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import DocumentStatus from "../../../Models/DocumentStatus";
import { withRouter } from "react-router";
import AdminDashboard from "../../Admin/AdminDashboard";
import { Link } from "react-router-dom";

class PassportApplicationSingle extends Component {
  service = new AdminService();

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
    passport: undefined,
    expanded: "panel1",
  };

  componentDidMount() {
    const appId = this.props.match.params.appId;

    this.service
      .getPassportApplication(appId)
      .then((res) => {
        console.log(res);
        this.setState({ application: res });
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });

    this.service
      .getPassportByApp(appId)
      .then((res) => {
        this.setState({ passport: res });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
        alert("Document status updated!");
      })
      .catch((err) => {
        console.log(err);
        alert("Document status updated!");
      });

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

  issuePassport = () => {
    this.service
      .issuePassport(this.state.application.applicationNo)
      .then((res) => {
        console.log(res);
        alert("Passport issed successfully!");
        this.props.history.push(`/admin/passports/${this.state.application.applicationNo}`)
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        // alert("Unable to issue passport. Please check the application form once again or try again later.")
      });
  };

  generatePassportBtn = () => {
    if (
      this.state.application.applicationStatus &&
      this.state.passport === undefined
    ) {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={this.issuePassport}
        >
          Generate Passport
        </Button>
      );
    }
    if (this.state.passport !== undefined) {
      return (
        <Button variant="contained" color="primary" component={Link} to={`/admin/passports/${this.state.application.applicationNo}`}>
          View Passport
        </Button>
      );
    }
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
      address,
      documents,
      applicationStatus,
    } = this.state.application;
    const { houseNo, street, state, district, pinCode, mobileNo } = address;
    const { expanded } = this.state;
    return (
      <AdminDashboard>
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
                                <Checkbox
                                  disabled={this.state.passport !== undefined}
                                  checked={document.isVerified}
                                  onChange={(e) => {
                                    return this.state.passport === undefined
                                      ? this.handleSwitch(
                                          document.documentId,
                                          e.target.checked
                                        )
                                      : null;
                                  }}
                                  inputProps={{
                                    "aria-label": "primary checkbox",
                                  }}
                                />
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
          {this.generatePassportBtn()}
        </div>
      </AdminDashboard>
    );
  }
}

export default withRouter(PassportApplicationSingle);
