import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { Component } from "react";
import AdminService from "../../../services/AdminService";
import AdminDashboard from "../../Admin/AdminDashboard";
import BossCard from "../../BossCard";
import BossContainer from "../../BossContainer";

export class Passport extends Component {
  adminService = new AdminService();

  initalState = {
    passports: [],
  };

  state = { ...this.initalState };

  componentDidMount() {
    this.adminService
      .getAllPassports()
      .then((res) => {
        this.setState({ passports: [...res] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderTable = () => {
    if (this.state.passports.length > 0) {
      return this.state.passports.map((passport, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{passport.passportNo}</TableCell>
          <TableCell>{passport.dateOfIssue}</TableCell>
          <TableCell>{passport.dateOfExpiry}</TableCell>
          <TableCell>{passport.nationality}</TableCell>
          <TableCell>{passport.passportApplication.applicationNo}</TableCell>
        </TableRow>
      ));
    }
    return (
      <TableRow>
        <TableCell colSpan={6} align="center">
          <h4>No records found!</h4>
        </TableCell>
      </TableRow>
    );
  };

  render() {
    return (
      <AdminDashboard>
        <BossCard>
          <h1 style={{ textAlign: "center" }}>Issued Passports</h1>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>S.no.</TableCell>
                  <TableCell>Passport no.</TableCell>
                  <TableCell>Date of issue</TableCell>
                  <TableCell>Date of expiry</TableCell>
                  <TableCell>Nationality</TableCell>
                  <TableCell>Application no.</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.renderTable()}</TableBody>
            </Table>
          </TableContainer>
        </BossCard>
      </AdminDashboard>
    );
  }
}

export default Passport;
