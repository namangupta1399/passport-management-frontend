import axios from "axios";
import BASE_URL from "../backend";

class AdminService {
  // New usr
  createUser = (user) => {
    return axios
      .post(`${BASE_URL}/admin/user/new`, user)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Get all user
  getAllUsers = () => {
    return axios
      .get(`${BASE_URL}/admin/users`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Get user by id
  getUser = (userId) => {
    return axios
      .get(`${BASE_URL}/admin/user/${userId}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Update user
  updateUser = (user) => {
    return axios
      .put(`${BASE_URL}/admin/user/update`, user)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Delete applicant
  deleteUser = (userId) => {
    return axios
      .delete(`${BASE_URL}/admin/user/delete/${userId}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Get all passport applications
  getAllPassportApplications = () => {
    return axios
      .get(`${BASE_URL}/admin/applications`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Get passport application by appId
  getPassportApplication = (appId) => {
    return axios
      .get(`${BASE_URL}/admin/application/${appId}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Update document status
  updateDocumentStatus = (docStatus) => {
    console.log(docStatus);
    return axios
      .put(`${BASE_URL}/admin/application/document/status/update`, docStatus)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Update application status
  updateApplicationStatus = (data) => {
    return axios
      .put(`${BASE_URL}/admin/application/status/update`, data)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Issue passport
  issuePassport = (appNo) => {
    return axios
      .post(`${BASE_URL}/admin/passport/new/${appNo}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Get passport by app no
  getPassportByApp = (appNo) => {
    return axios
      .get(`${BASE_URL}/admin/passport/app/${appNo}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Get all passports
  getAllPassports = () => {
    return axios
      .get(`${BASE_URL}/admin/passports`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Get all queries
  getAllHelpdeskQueries = () => {
    return axios
      .get(`${BASE_URL}/admin/helpdesk/all`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Update query
  updateQuery = (query) => {
    return axios
      .put(`${BASE_URL}/admin/helpdesk/update`, query)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };
}
export default AdminService;
