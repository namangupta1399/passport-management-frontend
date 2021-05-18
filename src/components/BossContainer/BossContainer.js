import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function BossContainer(props) {
  return (
    <>
      <Navbar />
      <Container>
          {props.children}
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default BossContainer;
