import {
  Button,
  IconButton,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { Component } from "react";
import { Table } from "reactstrap";
import AdminService from "../../../services/AdminService";
import BossContainer from "../../BossContainer";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import BossCard from "../../BossCard";
import AdminDashboard from "../../Admin/AdminDashboard";

class User extends Component {
  constructor(props) {
    super(props);

    this.adminService = new AdminService();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.adminService
      .getAllUsers()
      .then((res) => {
        this.setState({ users: [...res] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleDelete = (userId) => {
    console.log("DELETE: ", userId);
    this.adminService
      .deleteUser(userId)
      .then((res) => {
        const updatedList = [...this.state.users].filter(
          (user) => user.id !== userId
        );
        window.alert("User delete successfully!");
        this.setState({ users: [...updatedList] });
      })
      .catch((err) => {
        window.alert("Unable to delete the user. Try again later.");
        console.log("Unable to delete user. Try again later.");
      });
  };

  renderTable = () => {
    if (this.state.users.length > 0) {
      return this.state.users.map((user, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.userRole}</TableCell>
          <TableCell>{user.createdOn}</TableCell>
          <TableCell>{user.updatedOn}</TableCell>
          <TableCell>
            <IconButton
              component={Link}
              to={`/admin/users/edit/${user.id}`}
              color="primary"
              aria-label="edit user"
            >
              <EditIcon />
            </IconButton>
          </TableCell>
          <TableCell>
            <IconButton
              color="primary"
              aria-label="remove user"
              onClick={this.handleDelete.bind(this, user.id)}
            >
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ));
    }
    return (
      <TableRow>
        <TableCell colSpan="3" align="center">
          <h4>No records found!</h4>
        </TableCell>
      </TableRow>
    );
  };

  render() {
    return (
      <AdminDashboard>
        <BossCard>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "1rem 0",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Manage Users</h1>
            <Button
              component={Link}
              to="/admin/users/new"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<AddIcon />}
            >
              New user
            </Button>
          </div>
          <TableContainer>
            <Table hover aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>S.no.</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Created on</TableCell>
                  <TableCell>Updated on</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.renderTable()}</TableBody>
            </Table>
          </TableContainer>
        </BossCard>
      </AdminDashboard>
    );
  }
}

export default User;
