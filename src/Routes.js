import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Helpdesk from "./components/ApplicantComponents/Helpdesk";
import Applicant from "./components/Applicant";
import Admin from "./components/Admin";
import PassportApplication from "./components/PassportApplication";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/applicant" component={Applicant} />
        <Route exact path="/applicant/helpdesk" component={Helpdesk} />
        <Route exact path="/passportapplication" component={PassportApplication} />
        <Route exact path="/admin" component={Admin} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
