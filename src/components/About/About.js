import React from "react";
import BossContainer from "../BossContainer";
import about1 from "../../assets/images/about/about1.png";
import about2 from "../../assets/images/about/about2.png";
import about3 from "../../assets/images/about/about3.png";

function About() {
  return (
    <BossContainer noPadding>
      <div className="position-relative">
        <h1
          style={{
            fontFamily: "Arial",
            fontWeight: "900",
            fontSize: "6.5rem",
            lineHeight: "1.4",
            color: "#fff",
            position: "absolute",
            top: "250px",
            left: "150px",
          }}
        >
          ABOUT US
        </h1>
        <img src={about1} width="100%" height="100%" />
      </div>
      <div className="position-relative">
        <div
          style={{
            color: "#fff",
            position: "absolute",
            left: "40%",
            right: "0",
            bottom: "0",
            backgroundImage: "linear-gradient(45deg, #00000090, #00000090)",
            padding: "2rem 3rem",
          }}
        >
          <h1
            style={{
              fontFamily: "Arial",
              fontWeight: "900",
              fontSize: "5.5rem",
              lineHeight: "1.4",
            }}
          >
            WHAT IS HOP ?
          </h1>
          <p style={{ fontSize: "1.5rem" }}>
            The <strong>House of Passports</strong> (HOP) aims to make the whole
            process of applying for a Passport easier for the users. The system
            uses a user-friendly environment where the user can register and
            apply for their Passport and check their application status. The
            main objective of this system is to speed up the lengthy process and
            make it fast so that the applicant can apply for a Passport from
            anywhere without the need of visiting the local authority. The
            system asks the applicant for their details to register an account,
            which they can log into, and guides them successfully to fill the
            application required to issue the Passport. The Passport
            Administrator then verifies the application and the documents
            details submitted and hence, issue the Passport. The applicant also
            has the provision to submit their queries or feedback through
            helpdesk. These queries would be reviewed by the admin and they can
            respond to it appropriately.
          </p>
        </div>
        <img src={about2} width="100%" height="100%" />
      </div>
      <div className="position-relative">
        <div
          style={{
            color: "#fff",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: 'translate(-50%,-50%)',
            backgroundImage: "linear-gradient(45deg, #00000090, #00000090)",
            padding: "2rem 3rem",
            width: '80%'
          }}
        >
          <h1
            style={{
              fontFamily: "Arial",
              fontWeight: "900",
              fontSize: "6.5rem",
              lineHeight: "1.4",
              textAlign: 'center'
            }}
          >
            GOALS
          </h1>
          <hr style={{backgroundColor: '#fff'}} />
          <ul className="list-unstyled" style={{ fontSize: "1.5rem" }}>
            <li className="my-3">
              <strong>Passport application analysis:</strong> The online strategy will be quick
              and with a easy methodology to register for the same.
            </li>
            <li className="my-3">
              <strong>Document Verification:</strong> Identifying the right document type as
              national proof for the same application entity will be considered
              for each individual.
            </li>
            <li className="my-3">
              <strong>Passport Confirmation:</strong> Understanding the distribution of the
              passports will be purely based in first come first serve priority
              along with feedback confirmation of the passport so that the
              applicant can overview the passport from the site itself.
            </li>
          </ul>
        </div>
        <img src={about3} width="100%" height="100%" />
      </div>
    </BossContainer>
  );
}

export default About;
