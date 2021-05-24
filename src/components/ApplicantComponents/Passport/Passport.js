import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { Component } from "react";
import ApplicantService from "../../../services/ApplicantService";
import LoginService from "../../../services/LoginService";
import ApplicantDashboard from "../../Applicant/ApplicantDashboard";
import BossCard from "../../BossCard";

class Passport extends Component {
  applicantService = new ApplicantService();
  loginService = new LoginService();

  initalState = {
    passport: undefined,
  };

  state = { ...this.initalState };

  componentDidMount() {
    const user = this.loginService.isLoggedIn();
    this.applicantService
      .getPassport(user.id)
      .then((res) => {
        this.setState({ passport: { ...res } });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { passport } = this.state;
    if (passport !== undefined) {
      return (
        <ApplicantDashboard>
          <BossCard>
            <h1 style={{ textAlign: "center" }}>Passport Details</h1>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Passport no.</TableCell>
                    <TableCell>Date of issue</TableCell>
                    <TableCell>Date of expiry</TableCell>
                    <TableCell>Nationality</TableCell>
                    <TableCell>Application no.</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{passport.passportNo}</TableCell>
                    <TableCell>{passport.dateOfIssue}</TableCell>
                    <TableCell>{passport.dateOfExpiry}</TableCell>
                    <TableCell>{passport.nationality}</TableCell>
                    <TableCell>
                      {passport.passportApplication.applicationNo}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </BossCard>
        </ApplicantDashboard>
      );
    }
    return (
      <ApplicantDashboard>
        {this.state.application ? (
          this.renderApplication()
        ) : (
          <BossCard style={{ width: "100%" }}>
            <h1 className="text-center py-5 my-5">Passport not issued!</h1>
          </BossCard>
        )}
      </ApplicantDashboard>
    );
  }
}

export default Passport;
