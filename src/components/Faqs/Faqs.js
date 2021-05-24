import React, { Component } from "react";
import BossContainer from "../BossContainer";
import BossCard from "../BossCard";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";

class Faqs extends Component {
  state = {
    expanded: "panel1",
  };

  handleChange = (panel) => (event, newExpanded) => {
    //   console.log(panel, newExpanded)
    this.setState({ expanded: newExpanded ? panel : false });
  };

  render() {
    const { expanded } = this.state;
    return (
      <BossContainer>
        <BossCard>
          <h1 className="text-center">Frequently Asked Questions (FAQs)</h1>
          <div>
            <Accordion
              square
              expanded={expanded === "panel1"}
              onChange={this.handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>
                  <strong>#1 What is the process of registration?</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>
                    House of Passports (HOP) is an extended of Passport offices
                    to render front-end services related to passport issuance.
                    The process of registration is as follows:{" "}
                  </p>
                  <ol>
                    <li>
                      Applicants have to register online on the HOP website
                      using their email ID.
                    </li>
                    <li>
                      The applicant can then choose to fill a new application
                      with the required details.
                    </li>
                    <li>
                      The applicant can submit the form for the admin review.{" "}
                    </li>
                    <li>
                      The admin will verify all the details in the application
                      form and generate the passport.
                    </li>
                  </ol>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              square
              expanded={expanded === "panel2"}
              onChange={this.handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>
                  <strong>#2 What are the necessary documents required?</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>The documents required for issuance of passport are:</p>
                  <ul>
                    <li>Aadhaar card </li>
                    <li>PAN card</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              square
              expanded={expanded === "panel3"}
              onChange={this.handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>
                  <strong>#3 Can I track my application?</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>
                    Yes, the applicant can track his/her application status from
                    the applicant dashboard indicated with the tick and cross
                    for application verified or not verified respectively.
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              square
              expanded={expanded === "panel4"}
              onChange={this.handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography>
                  <strong>
                    #4 Can I track my document verification status?
                  </strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>
                    Yes, the applicant can track his/her document status from
                    the applicant dashboard indicated with the tick and cross
                    for documents verified or not verified respectively.
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              square
              expanded={expanded === "panel5"}
              onChange={this.handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <Typography>
                  <strong>#5 When will my passport be issued?</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>
                    The passport is issued once, the admin verifies whether the
                    applications and documents status are correct or not.
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </BossCard>
      </BossContainer>
    );
  }
}

export default Faqs;
