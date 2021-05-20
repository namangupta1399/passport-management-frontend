import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
// import GitHubIcon from '@material-ui/icons/GitHub';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "blue",
				textAlign: "center",
				marginTop: "-50px" }}>
		PassportPalace
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Terms and conditions</FooterLink>
			<FooterLink href="#">Privacy Policy</FooterLink>
		</Column>
		<Column>
			<Heading>Helpdesk</Heading>
			<FooterLink href="#">Raise a query</FooterLink>
			<FooterLink href="#">My queries</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<ul className="list-unstyled"  >
            <li>Capgemini Consultancy</li>
            <li>+91 8763082613</li>
            <li>abc@capgemini.com</li>
          </ul>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
		<hr />
        <div className="row">
          <p className="col-sm" textAlign="center">
            &copy;{new Date().getFullYear()} PassportPalace | All rights reserved | Terms of Service | Privacy
          </p>
        </div>
	</Container>
	</Box>
);
};
export default Footer;
