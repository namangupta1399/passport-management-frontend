import React, { Component } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import AdminService from "../../../services/AdminService";
import ReplyIcon from "@material-ui/icons/Reply";
import ResponseForm from "./ResponseForm";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import HelpdeskDTO from "../../../Models/HelpdeskDTO";
import BossCard from "../../BossCard";
import AdminDashboard from "../../Admin/AdminDashboard";

class Helpdesk extends Component {
  constructor(props) {
    super(props);

    this.adminService = new AdminService();

    this.state = {
      queries: [],
      currentQuery: undefined,
    };
  }

  componentDidMount() {
    this.adminService
      .getAllHelpdeskQueries()
      .then((res) => {
        this.setState({ queries: [...res] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateSolution = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        currentQuery: {
          ...prevState.currentQuery,
          solution: e.target.value,
          isResolved: true,
        },
      };
    });
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    const {
      helpdeskId,
      query,
      solution,
      isResolved,
      createdOn,
      updatedOn,
      user,
    } = this.state.currentQuery;
    const queryToUpdate = new HelpdeskDTO(
      helpdeskId,
      query,
      solution,
      isResolved,
      createdOn,
      updatedOn,
      user
    );
    console.log(queryToUpdate);

    this.adminService
      .updateQuery(queryToUpdate)
      .then((res) => {
        console.log(res);
        this.setState({ currentQuery: undefined });
      })
      .catch((err) => console.log(err));
  };

  renderTable = () => {
    if (this.state.queries.length > 0) {
      return this.state.queries.map((query, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{query.helpdeskId}</TableCell>
          <TableCell>{query.user.email}</TableCell>
          <TableCell>{query.query}</TableCell>
          <TableCell>{query.solution}</TableCell>
          <TableCell>{query.createdOn}</TableCell>
          <TableCell>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ReplyIcon />}
              onClick={() => {
                this.setState({ currentQuery: { ...query } });
                window.scrollTo(0, document.body.scrollHeight);
              }}
              disabled={query.isResolved}
            >
              Respond
            </Button>
          </TableCell>
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
        <TableCell colSpan="8" align="center">
          <h4>No records found!</h4>
        </TableCell>
      </TableRow>
    );
  };

  render() {
    return (
      <AdminDashboard>
        <BossCard>
          <h1 style={{ textAlign: "center" }}>Helpdesk Queries</h1>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>S.no.</TableCell>
                  <TableCell>Query ID</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Query</TableCell>
                  <TableCell>Solution</TableCell>
                  <TableCell>Raised on</TableCell>
                  <TableCell>Reply</TableCell>
                  <TableCell>isResolved</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.renderTable()}</TableBody>
            </Table>
          </TableContainer>
        </BossCard>
        {this.state.currentQuery ? (
          <ResponseForm
            query={this.state.currentQuery}
            updateSolution={this.updateSolution}
            handleSubmit={this.handleSubmit}
          />
        ) : null}
      </AdminDashboard>
    );
  }
}

export default Helpdesk;
