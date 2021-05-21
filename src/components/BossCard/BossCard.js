import React, { Component } from "react";

class BossCard extends Component {
  render() {
    const style = {
      margin: "0 auto",
      padding: "1rem 3rem",
      backgroundColor: "rgba(255,255,255,0.9)",
      borderRadius: "5px",
      boxShadow: 'rgb(155 142 142) 0px 0px 4px 1px',
      ...this.props.style,
    };
    const flex = this.props.flex ? `d-flex align-items-center flex-column` : "";
    return <div style={style} className={flex}>{this.props.children}</div>;
  }
}

export default BossCard;
