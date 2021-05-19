import React, { Component } from "react";
import BossContainer from "../../BossContainer";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import ApplicantService from "../../../services/ApplicantService";

class Helpdesk extends Component {
  constructor(props) {
    super(props);

    this.appService = new ApplicantService();

    this.state = {
      queries: [],
    };
  }

  componentDidMount() {
    this.appService
      .getAllHelpdeskQueries(1)
      .then((res) => {
        this.setState({ queries: [...res] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <BossContainer>
        <h1 style={{textAlign: 'center'}}>Helpdesk Queries</h1>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.no.</TableCell>
                <TableCell>Query</TableCell>
                <TableCell>Raised on</TableCell>
                {/* <TableCell></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.queries.map((query, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{query.query}</TableCell>
                  <TableCell>{query.createdOn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </BossContainer>
    );
  }
}

export default Helpdesk;