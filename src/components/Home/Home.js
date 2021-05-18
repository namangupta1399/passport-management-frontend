import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import BossContainer from "../BossContainer";

class Home extends Component {

  render() {
    return (
      <BossContainer>
        <h1 style={{textAlign: 'center'}}>Welcome to PassportPalace</h1>
      </BossContainer>
    );
  }
}

export default Home;
