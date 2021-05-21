import React from "react";
import { Route, Redirect } from "react-router-dom";
import LoginService from "../services/LoginService";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loginService = new LoginService();
  return (
    <Route
      {...rest}
      render={(props) =>
        loginService.isLoggedIn() && loginService.isLoggedIn().userRole === "applicant" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
