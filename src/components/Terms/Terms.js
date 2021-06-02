import React, { Component } from "react";
import BossContainer from "../BossContainer";
import passportBg from "../../assets/images/passport_bg.png";

class Terms extends Component {
  render() {
    return (
      <BossContainer>
        <div className="position-relative mx-auto" style={{ width: "60%" }}>
          <div
            style={{
              position: "absolute",
              textAlign: "center",
              top: "12%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
            }}
          >
            <h1 className="font-weight-bold mb-3">Terms &amp; Conditions</h1>
            <p>
              To improve the functionality of the website , certain files (such
              as open source libraries, images and scripts) may be delivered
              automatically to your browser via a trusted third-party server or
              content delivery network. The delivery of these files is intended
              to provide a seamless user experience by speeding response times
              and avoiding the need for each visitor to download these files.
            </p>
            <p>
              This website has been developed and maintained by House of
              Passports(HOP). Though all efforts have been made to keep the
              content on this website accurate and up-to-date, the same should
              not be construed as a statement of law or used for any legal
              purposes. HOP accepts no responsibility in relation to the
              accuracy, completeness, usefulness or otherwise, of the contents.
              Users are therefore advised to verify/check any information with
              HOP before acting on information provided in this website.
            </p>
            <p>
              In no event will HOP will be liable for any expense, loss or
              damage including, without limitation, indirect or consequential
              loss or damage, or any expense, loss or damage whatsoever arising
              from use, or loss of use, of data, arising out of or in connection
              with the use of this website.
            </p>
          </div>
          <img src={passportBg} alt="background-img" />
        </div>
      </BossContainer>
    );
  }
}

export default Terms;
