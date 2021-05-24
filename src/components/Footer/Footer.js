import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";
import "./FooterStyle.css";

const Footer = () => {
  const footerStyle = {
    color: "#fff",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly",
    paddingTop: "2rem",
  };
  return (
    <>
      <footer>
        <section style={footerStyle} className="p-3">
          <div>
            <h3>About Us</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/terms">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3>Helpdesk</h3>
            <ul className="list-unstyled">
              <li>
                <Link>Raise a query</Link>
              </li>
              <li>
                <Link>My queries</Link>
              </li>
            </ul>
          </div> */}
          <div>
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li>HOP Consultancy</li>
              <li>+91 9876543211</li>
              <li>admin@hopindia.com</li>
            </ul>
          </div>
          <div>
            <ul className="list-unstyled d-flex">
              <li style={{ margin: "0 20px" }}>
                <FacebookIcon fontSize="large" />
              </li>
              <li style={{ margin: "0 20px" }}>
                <InstagramIcon fontSize="large" />
              </li>
              <li style={{ margin: "0 20px" }}>
                <TwitterIcon fontSize="large" />
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <div className="text-white text-right p-3">
          <p>
            &copy;{new Date().getFullYear()} House Of Passports | All rights
            reserved | <Link to="/terms">Terms of Service</Link> |{" "}
            <Link to="/privacy">Privacy</Link>
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
