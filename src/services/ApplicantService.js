import axios from "axios";
import BASE_URL from "../backend";

class ApplicantService {
  // Applicant Registration
  signUp = (user) => {
    return axios
      .post(`${BASE_URL}/applicant/user/new`, user)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err.response);
        throw new Error(err.response.data.message);
      });
  };

  // Get user data
  getUserById = (userId) => {
    return axios
      .get(`${BASE_URL}/user/${userId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Delete user
  deleteUser = (userId) => {
    return axios
      .delete(`${BASE_URL}/user/delete/${userId}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Update user
  updateUser = (user) => {
    return axios
      .put(`${BASE_URL}/user/update`, user)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // New passport application
  createPassportApplication = (application) => {
    return axios
      .post(`${BASE_URL}/applicant/application/new`, application)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Get passport application details
  getPassportApplication = (appId) => {
    return axios
      .get(`${BASE_URL}/application/${appId}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Update passport application
  updatePassportApplication = (application) => {
    return axios
      .put(`${BASE_URL}/application/update`, application)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Delete passport application
  deletePassportApplication = (appId) => {
    return axios
      .delete(`${BASE_URL}/application/delete/${appId}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // New helpdesk query
  createHelpdeskQuery = (query) => {
    return axios
      .post(`${BASE_URL}/applicant/helpdesk/query/new`, query)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Get all helpdesk queries by user
  getAllHelpdeskQueries = (userId) => {
    return axios
      .get(`${BASE_URL}/applicant/helpdesk/query/${userId}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error("ERROR");
      });
  }

  // Update helpdesk query
  // updateHelpdeskQuery = (queryId) => {
  //   return axios
  //     .put(`${BASE_URL}/applicant/helpdesk/update/${queryId}`)
  //     .then((res) => res.data)
  //     .catch((err) => {
  //       throw new Error(err.response.data.message);
  //     });
  // }

  // Get passport application status
  getApplicationStatus = (appNo) => {
    return axios
      .get(`${BASE_URL}/application/status/${appNo}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  }
}

export default ApplicantService;
