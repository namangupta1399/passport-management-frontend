import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import ApplicantService from "../../../services/ApplicantService";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import BossCard from "../../BossCard";
import LoginService from "../../../services/LoginService";
import ApplicantDashboard from "../../Applicant/ApplicantDashboard";

class Helpdesk extends Component {
  constructor(props) {
    super(props);

    this.appService = new ApplicantService();
    this.loginService = new LoginService();

    this.state = {
      queries: [],
    };
  }

  componentDidMount() {
    const user = this.loginService.isLoggedIn();
    this.appService
      .getAllHelpdeskQueries(user.id)
      .then((res) => {
        this.setState({ queries: [...res] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderTable = () => {
    if (this.state.queries.length > 0) {
      return this.state.queries.map((query, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{query.query}</TableCell>
          <TableCell>{query.solution}</TableCell>
          <TableCell>{query.createdOn}</TableCell>
          <TableCell align="center">
            {query.isResolved ? (
              <CheckCircleOutlineRoundedIcon style={{ color: "#0f0" }} />
            ) : (
              <CancelRoundedIcon color="error" />
            )}
          </TableCell>
        </TableRow>
      ));
    }
    return (
      <TableRow>
        <TableCell colSpan="5" align="center">
          <h4>No records found!</h4>
        </TableCell>
      </TableRow>
    );
  };

  render() {
    return (
      <ApplicantDashboard>
        <div className="d-flex flex-column w-100">
        <BossCard style={{ width: "100%" }}>
          <h1 style={{ textAlign: "center" }}>Helpdesk Queries</h1>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>S.no.</TableCell>
                  <TableCell>Query</TableCell>
                  <TableCell>Solution</TableCell>
                  <TableCell>Raised on</TableCell>
                  <TableCell>isResolved</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.renderTable()}</TableBody>
            </Table>
          </TableContainer>
        </BossCard>
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Button
            component={Link}
            to="/applicant/helpdesk/new"
            variant="contained"
            color="primary"
          >
            HAVE A QUERY ?
          </Button>
        </div> */}
      </div>
      </ApplicantDashboard>
    );
  }
}

export default Helpdesk;
