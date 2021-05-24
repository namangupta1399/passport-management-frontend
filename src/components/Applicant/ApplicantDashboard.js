import React, { Component } from "react";
import ApplicantService from "../../services/ApplicantService";
import LoginService from "../../services/LoginService";
import Dashboard from "../Dashboard";
import Applicant from "./Applicant";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import UserProfile from "../UserProfile/UserProfile";
import NewPassportApplication from "../ApplicantComponents/PassportApplication/NewPassportApplication";
import PassportApplication from "../ApplicantComponents/PassportApplication";
import EditPassportApplication from "../ApplicantComponents/PassportApplication/EditPassportApplication";
import Helpdesk from "../ApplicantComponents/Helpdesk";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NewQuery from "../ApplicantComponents/Helpdesk/NewQuery";
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
