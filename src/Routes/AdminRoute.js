import React from "react";
import { Redirect, Route } from "react-router";
import LoginService from "../services/LoginService";

const AdminRoute = ({ component: Component, ...rest }) => {
  const loginService = new LoginService();
  
  return (
    <Route
      {...rest}
      render={(props) =>
        loginService.isLoggedIn() && loginService.isLoggedIn().userRole === "admin" ? (
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

export default AdminRoute;
