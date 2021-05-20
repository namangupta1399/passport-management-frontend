import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { Component } from "react";
import AdminService from "../../../services/AdminService";
import BossContainer from "../../BossContainer";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";

class PassportApplication extends Component {
  constructor(props) {
    super(props);

    this.adminService = new AdminService();

    this.state = {
      applications: [],
    };
  }

  componentDidMount() {
    this.adminService
      .getAllPassportApplications()
      .then((res) => {
        this.setState({ applications: [...res] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderTable = () => {
    if (this.state.applications.length > 0) {
      return this.state.applications.map((application, index) => (
        <TableRow key={index}>
          <TableCell>{index}</TableCell>
          <TableCell>{application.applicationNo}</TableCell>
          <TableCell>{`${application.firstName} ${application.lastName}`}</TableCell>
          <TableCell>{application.createdOn}</TableCell>
          <TableCell>{application.updatedOn}</TableCell>
          <TableCell align="center">
            {application.applicationStatus ? (
              <CheckCircleOutlineRoundedIcon style={{ color: "#0f0" }} />
            ) : (
              <CancelRoundedIcon color="error" />
            )}
          </TableCell>
          <TableCell align="center">
            <IconButton component={Link} to={`/admin/applications/${application.applicationNo}`} color="primary" aria-label="view passport application">
              <VisibilityIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ));
    }
  };

  render() {
    return (
      <BossContainer>
        <h1 style={{ textAlign: "center" }}>Passport Applications</h1>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.no.</TableCell>
                <TableCell>Application no.</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Raised on</TableCell>
                <TableCell>Last updated</TableCell>
                <TableCell>isFinished</TableCell>
                <TableCell>View application</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.renderTable()}</TableBody>
          </Table>
        </TableContainer>
      </BossContainer>
    );
  }
}

export default PassportApplication;
