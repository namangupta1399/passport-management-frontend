import React, { Component } from "react";
import ApplicantService from "../../services/ApplicantService";
import LoginService from "../../services/LoginService";
import Dashboard from "../Dashboard";
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
import GroupIcon from '@material-ui/icons/Group';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

class AdminDashboard extends Component {
  loginService = new LoginService();
  user = this.loginService.isLoggedIn();

  render() {
    const menuArr = [
      "Dashboard",
      "My profile",
      "Manage users",
      "Manage applications",
      "Manage passports",
      "Helpdesk",
    ];

    const paths = [
      "/admin",
      "/user/profile",
      "/admin/users",
      "/admin/applications",
      "/admin/passports",
      "/admin/helpdesk"
    ];

    const iconArray = [
      <DashboardIcon />,
      <AccountCircleIcon />,
      <GroupIcon />,
      <FileCopyIcon />,
      <LibraryBooksIcon />,
      <HelpIcon />
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

export default AdminDashboard;
