import {
  Checkbox,
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
import BossCard from "../../BossCard";
import AdminDashboard from "../../Admin/AdminDashboard";

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

  handleSwitch = (appNo, appStatus) => {
    const data = { appNo, status: appStatus };
    this.adminService
      .updateApplicationStatus(data)
      .then((res) => {
        console.log(res.data);
        const apps = [...this.state.applications];
        apps.forEach((app) => {
          if (app.applicationNo == appNo) {
            app.applicationStatus = appStatus;
          }
        });
        this.setState((prevState) => {
          return {
            ...prevState,
            applications: [...apps],
          };
        });
        console.log("Application status updated !");
        alert("Application status updated");
      })
      .catch((err) => {
        console.log(err);
        // alert('Unable to update application status. Please try again later.')
        alert(err);
      });
  };

  renderTable = () => {
    if (this.state.applications.length > 0) {
      return this.state.applications.map((application, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{application.applicationNo}</TableCell>
          <TableCell>{`${application.firstName} ${application.lastName}`}</TableCell>
          <TableCell>{application.createdOn}</TableCell>
          <TableCell>{application.updatedOn}</TableCell>
          <TableCell align="center">
            <Checkbox
              checked={application.applicationStatus}
              onChange={(e) =>
                this.handleSwitch(application.applicationNo, e.target.checked)
              }
              inputProps={{
                "aria-label": "primary checkbox",
              }}
            />
          </TableCell>
          <TableCell align="center">
            <IconButton
              component={Link}
              to={`/admin/applications/${application.applicationNo}`}
              color="primary"
              aria-label="view passport application"
            >
              <VisibilityIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ));
    }
  };

  render() {
    return (
      <AdminDashboard>
        <BossCard>
        <h1 style={{ textAlign: "center" }}>Passport Applications</h1>
          <TableContainer>
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
        </BossCard>
      </AdminDashboard>
    );
  }
}

export default PassportApplication;
