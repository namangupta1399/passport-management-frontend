import axios from "axios";
import BASE_URL from "../backend";

class LoginService {
  // User login
  signIn = (user) => {
    return axios
      .post(`${BASE_URL}/user/login`, user)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
      })
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  // Check if logged in
  isLoggedIn = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  // Logout
  signout = (next) => {
    localStorage.removeItem("user");
    next();
  }
}

export default LoginService;
