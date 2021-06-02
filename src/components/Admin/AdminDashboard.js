import React, { Component } from "react";
import LoginService from "../../services/LoginService";
import Dashboard from "../Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HelpIcon from '@material-ui/icons/Help';
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
