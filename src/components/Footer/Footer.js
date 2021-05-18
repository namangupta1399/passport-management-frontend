import { AppBar, Button, Container, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    margin: "0 10px",
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="absolute" style={{top: '100%'}}>
    <Toolbar>
      <Container style={{ display: "flex" }}>
        <Typography variant="h6" className={classes.title}>
          PassportPalace
        </Typography>
        
      </Container>
    </Toolbar>
    </AppBar>
  );
}

export default Footer;
