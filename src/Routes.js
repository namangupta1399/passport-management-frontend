import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
