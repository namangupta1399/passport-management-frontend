import { Container, Paper } from "@material-ui/core";
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function BossContainer(props) {
  const containerBox = {
    // background: 'rgba(255,255,255,.5)' ,
    padding: '4rem 2rem',  
    position: 'relative',
  }
  const noPadding = props.noPadding ? "p-0" : "";
  return (
    <>
      <Navbar />
      <div style={containerBox} className={noPadding}>{props.children}</div>
      <Footer />
    </>
  );
}

export default BossContainer;
