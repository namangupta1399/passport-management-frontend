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

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    position: "absolute",
    // height: "auto",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class Dashboard extends Component {
  classes = withStyles();

  state = {
    currentComponent: undefined,
  };

  render() {
    const classes = this.props.classes;
    return (
      <BossContainer style={{ position: "relative" }}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {this.props.menuList.map((text, index) => (
                <ListItem
                  button
                  key={text}
                  onClick={() =>
                    this.setState({
                      currentComponent: this.props.components[index],
                    })
                  }
                >
                  <ListItemIcon>{this.props.icons[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        {this.state.currentComponent}
      </BossContainer>
    );
  }
}

export default withStyles(styles)(Dashboard);
