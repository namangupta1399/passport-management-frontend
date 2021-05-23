import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import BossContainer from "../BossContainer";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import LoginService from "../../services/LoginService";

const styles = (theme) => ({
  root: {
    width: 350,
    height: "auto",
    backgroundColor: theme.palette.background.paper,
  },
});

class Dashboard extends Component {
  classes = withStyles();
  loginService = new LoginService();

  render() {
    const classes = this.props.classes;
    const user = this.loginService.isLoggedIn();
    const username = user.email.split("@")[0];
    return (
      <BossContainer
        style={{
          display: "flex",
          alignItems: "stretch",
        }}
        noPadding
      >
        <div className={classes.root}>
          <List component="nav">
            <ListItem>
              <AccountCircleIcon style={{ fontSize: "4rem" }} />
              <h2 className="ml-3 mb-0">{username}</h2>
            </ListItem>
            <Divider />
            {this.props.menuList.map((text, index) => (
              <ListItem
                button
                key={text}
                component={Link}
                to={this.props.paths[index]}
              >
                <ListItemIcon>{this.props.icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
        <div style={{ padding: "4rem 2rem", width: "100%" }}>
          {this.props.children}
        </div>
      </BossContainer>
    );
  }
}

export default withStyles(styles)(Dashboard);
