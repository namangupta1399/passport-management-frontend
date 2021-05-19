import axios from "axios";
import BASE_URL from "../backend";

class LoginService {
  // User login
  signIn = (user) => {
    return axios
      .post(`${BASE_URL}/user/login`, user)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };
}

export default LoginService;