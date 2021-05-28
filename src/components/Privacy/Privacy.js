import React, { Component } from "react";
import BossContainer from "../BossContainer";
import BossCard from "../BossCard";
import passportBg from "../../assets/images/passport_bg.png";

const Privacy =() => {
  
    return (
      <BossContainer>
        <div className="position-relative mx-auto" style={{ width: "60%" }}>
          <div
            style={{
              position: "absolute",
              textAlign: "center",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
            }}
          >
            <h1 className="font-weight-bold mb-3">Privacy Policy</h1>
            <p>
              As a general rule, this web site does not collect Personal
              Information about you when you visit the site. You can generally
              visit the site without revealing Personal Information, unless you
              choose to provide such information. Any Personal information
              collected shall be used only for the purpose for which you have
              provided it. In very exceptional cases, data could be shared with
              other government agencies, but this will be done only after
              following the due process.{" "}
            </p>
            <p>
              <strong>Site Visit Data:&nbsp;</strong>
              This website records your visit and logs the following information
              for statistical and security purposes your server's address; the
              name of the top-level domain from which you access the Internet
              (for example, .gov, .com, .in, etc.); the type of browser you use;
              the date and time you access the site; the pages you have accessed
              and the documents downloaded and the previous Internet address
              from which you linked directly to the site. We will not identify
              users or their browsing activities, except when a law enforcement
              agency may exercise a warrant to inspect the service provider's
              logs.
            </p>
            <p>
              <strong>Cookies:&nbsp;</strong> 
              Cookie is a piece of software code that an internet web site sends
              to your browser when you access information at that site. This
              site does not use cookies.
            </p>
          </div>
          <img src={passportBg} />
        </div>
      </BossContainer>
    );

}

export default Privacy;
