import axios from "axios";
import BASE_URL from "../backend";

class AdminService {
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
    console.log(docStatus)
    return axios
      .put(`${BASE_URL}/admin/application/document/status/update`, docStatus)
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
        // throw new Error(err.response.data.message);
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
