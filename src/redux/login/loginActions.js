import axios from "axios";

import BACKEND_URL from "../../../backend";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./loginTypes";

export const user_signup = (user) => {
  return (dispatch) => {
    axios
      .post(`${BACKEND_URL}/applicant/user/new`, user)
      .then((res) => {
        dispatch(loginAction(LOGIN_SUCCESS, res.data));
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(LOGIN_FAILURE, err);
        console.err(err);
      });
  };
};

export const loginAction = (action, data) => {
  return {
    type: action,
    payload: data,
  };
};
