import React, { Component } from "react";
import BossContainer from "../BossContainer";

import { routesList } from "../../Routes";
import { Link } from "react-router-dom";

export class Sitemap extends Component {
  render() {
    return (
      <BossContainer>
        <h1 style={{ textAlign: "center" }}>Sitemap</h1>
        <ul>
          {routesList.map((route, index) => (
            <li key={index} style={{ margin: "10px 0" }}>
              <Link to={route.path}>{route.path}</Link>
            </li>
          ))}
        </ul>
      </BossContainer>
    );
  }
}

export default Sitemap;
