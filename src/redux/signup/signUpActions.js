import axios from "axios";
import BACKEND_URL from "../../backend";

import { SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./signUpTypes";

export const signup = (user) => {
  return (dispatch) => {
    axios
      .post(`${BACKEND_URL}/applicant/user/new`, user)
      .then((res) => {
        dispatch(loginAction(SIGNUP_SUCCESS, res.data));
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(loginAction(SIGNUP_FAILURE, err));
        console.error(err);
      });
  };
};

export const loginAction = (action, message) => {
  return {
    type: action,
    payload: message,
  };
};
