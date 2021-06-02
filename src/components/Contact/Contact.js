import React, { Component } from "react";
import BossContainer from "../BossContainer";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
import aman from "../../assets/images/team/aman.jpeg";
import gargi from "../../assets/images/team/gargi.png";
import naman from "../../assets/images/team/naman.png";
import simran from "../../assets/images/team/simran.JPG";
import sid from "../../assets/images/team/siddharth.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

class Contact extends Component {
  team = [
    {
      name: "Aman Verma",
      imageSrc: aman,
      linkedin: "https://www.linkedin.com/in/amanverma98/",
    },
    {
      name: "Gargi R Pathak",
      imageSrc: gargi,
      linkedin: "http://www.linkedin.com/in/gargipathak",
    },
    {
      name: "Naman",
      imageSrc: naman,
      linkedin: "https://www.linkedin.com/in/namangupta1399/",
    },
    {
      name: "Simran Malhi",
      imageSrc: simran,
      linkedin: "https://www.linkedin.com/in/simran-malhi11/",
    },
    {
      name: "Siddharth Gautam",
      imageSrc: sid,
      linkedin: "https://www.linkedin.com/in/siddharth-gautam-160227172/",
    },
  ];

  render() {
    const styles = {
      itemHeading: {
        fontWeight: "bold",
        fontSize: "1.2rem",
      },
      itemBlock: {
        backgroundColor: "#987624",
        textAlign: "center",
        padding: "3rem",
        marginRight: "3rem",
        width: "300px",
      },
      teamIcon: {
        width: "10rem",
        height: "auto",
        border: "1px solid",
        borderRadius: "100%",
        margin: "1rem 7rem",
      },
      teamContainer: {
        display: "flex",
      },
      iconGrp: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    };
    const icons = [
      <LocationOnIcon fontSize="large" />,
      <PhoneIphoneIcon fontSize="large" />,
      <EmailIcon fontSize="large" />,
    ];
    const headings = ["ADDRESS", "PHONE", "E-MAIL"];
    const values = [
      "Malibu Point 10880, 90265",
      "+91 874561 54876",
      "support@hop.com",
    ];
    return (
      <BossContainer>
        <div
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8))",
          }}
        >
          <div className="py-5 text-white">
            <h1 className="text-center text-white font-weight-bold mb-5">
              Contact Us
            </h1>
            <div
              className="d-flex align-items-center justify-content-center"
              style={styles.itemContainer}
            >
              {icons.map((icon, i) => {
                return (
                  <div style={styles.itemBlock} key={i}>
                    <div style={styles.itemIcon}>{icon}</div>
                    <div style={styles.itemHeading}>{headings[i]}</div>
                    <p style={styles.itemValue}>{values[i]}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="py-5 text-white">
            <h1 className="text-center text-white font-weight-bold mb-5">
              Meet the Team
            </h1>
            <div
              className="d-flex align-items-center justify-content-center flex-column"
              style={styles.teamContainer}
            >
              <div style={styles.iconGrp}>
                {this.team.map((person, index) => (
                  <div key={index}>
                    <img
                      alt={person.name}
                      src={person.imageSrc}
                      style={styles.teamIcon}
                    />
                    <h5 className="text-center">{person.name}</h5>
                    <LinkedInIcon
                      className="d-block mx-auto"
                      style={{ cursor: "pointer" }}
                      onClick={() => (window.location.href = person.linkedin)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BossContainer>
    );
  }
}

export default Contact;
