import axios from "axios";
import BACKEND_URL from "../backend";

export const signUp = (user) => {
  return axios
    .post(`${BACKEND_URL}/applicant/user/new`, user)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
        console.log(err.response);
      throw new Error(err.response.data.message);
    });
};
