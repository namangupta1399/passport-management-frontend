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
import './FooterStyle.css';

const Footer = () => {
  const footerStyle = {
    color: "#fff",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly",
  };
  return (
    <>
      <footer>
        <section style={footerStyle} className="p-3">
          <div>
            <h3>About Us</h3>
            <ul className="list-unstyled">
              <li><Link>Terms &amp; Conditions</Link></li>
              <li><Link>Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3>Helpdesk</h3>
            <ul className="list-unstyled">
              <li><Link>Raise a query</Link></li>
              <li><Link>My queries</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li>Capgemini Consultancy</li>
              <li>+91 8763082613</li>
              <li>abc@capgemini.com</li>
            </ul>
          </div>
          <div>
            <h3>Social Media</h3>
            <ul className="list-unstyled d-flex">
              <li style={{margin: '0 20px'}}>
                <FacebookIcon fontSize="large" />
              </li>
              <li style={{margin: '0 20px'}}>
                <InstagramIcon fontSize="large" />
              </li>
              <li style={{margin: '0 20px'}}>
                <TwitterIcon fontSize="large" />
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <div className="text-white text-right p-3">
          <p>
            &copy;{new Date().getFullYear()} House Of Passports | All rights
            reserved | Terms of Service | Privacy
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
