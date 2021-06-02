import React, { Component } from "react";
import ApplicantService from "../../services/ApplicantService";
import LoginService from "../../services/LoginService";
import Dashboard from "../Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import EditIcon from "@material-ui/icons/Edit";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HelpIcon from '@material-ui/icons/Help';
import LaunchIcon from '@material-ui/icons/Launch';

class ApplicantDashboard extends Component {
  loginService = new LoginService();
  applicantService = new ApplicantService();
  user = this.loginService.isLoggedIn();

  render() {
    const menuArr = [
      "Dashboard",
      "My profile",
      "Apply for new passport",
      "View my application",
      "Edit my application",
      "Helpdesk",
      "Have a query ?",
    ];

    const paths = [
      "/applicant",
      "/user/profile",
      "/applicant/passportapplication/new",
      "/applicant/passportapplication",
      "/applicant/passportapplication/edit",
      "/applicant/helpdesk",
      "/applicant/helpdesk/new",
    ];

    const iconArray = [
      <DashboardIcon />,
      <AccountCircleIcon />,
      <CreateNewFolderIcon />,
      <FileCopyIcon />,
      <EditIcon />,
      <HelpIcon />,
      <LaunchIcon />,
    ];

    return (
      <Dashboard
        icons={iconArray}
        menuList={menuArr}
        paths={paths}
      >
        {this.props.children}
      </Dashboard>
    );
  }
}

export default ApplicantDashboard;
