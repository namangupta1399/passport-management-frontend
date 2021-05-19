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
import Sitemap from "./components/Sitemap";

export const routesList = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/login",
    component: SignIn,
  },
  {
    path: "/register",
    component: SignUp,
  },
  {
    path: "/applicant",
    component: Applicant,
  },
  {
    path: "/applicant/helpdesk",
    component: Helpdesk,
  },
  {
    path: "/passportApplication",
    component: PassportApplication,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/sitemap",
    component: Sitemap
  },
  {
    path: "/*",
    component: PageNotFound,
  },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routesList.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
