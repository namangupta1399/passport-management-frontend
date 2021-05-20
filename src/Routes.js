import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { default as ApplicantHelpdesk } from "./components/ApplicantComponents/Helpdesk";
import { default as AdminHelpdesk } from "./components/AdminComponents/Helpdesk";
import Applicant from "./components/Applicant";
import Admin from "./components/Admin";
import Sitemap from "./components/Sitemap";
import { default as AdminApplications } from "./components/AdminComponents/PassportApplication";
import PassportApplicationSingle from "./components/AdminComponents/PassportApplication/PassportApplicationSingle";
import { default as AdminUsers } from "./components/AdminComponents/User";
import { default as AdminNewUser } from "./components/AdminComponents/User/NewUser";
import { default as AdminEditUser } from "./components/AdminComponents/User/ModifyUser";
import NewQuery from "./components/ApplicantComponents/Helpdesk/NewQuery";
import UserProfile from "./components/UserProfile/UserProfile";
import PassportApplication from "./components/ApplicantComponents/PassportApplication/PassportApplication";
import NewPassportApplication from "./components/ApplicantComponents/PassportApplication/NewPassportApplication";
import EditPassportApplication from "./components/ApplicantComponents/PassportApplication/EditPassportApplication";

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
    path: "/user/profile",
    component: UserProfile,
  },
  {
    path: "/applicant",
    component: Applicant,
  },
  {
    path: "/applicant/helpdesk",
    component: ApplicantHelpdesk,
  },
  {
    path: "/applicant/helpdesk/new",
    component: NewQuery,
  },
  {
    path: "/applicant/passportApplication/new",
    component: NewPassportApplication,
  },
  {
    path: "/applicant/passportApplication",
    component: PassportApplication,
  },
  {
    path: "/applicant/passportApplication/edit",
    component: EditPassportApplication,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/admin/users",
    component: AdminUsers,
  },
  {
    path: "/admin/users/new",
    component: AdminNewUser,
  },
  {
    path: "/admin/users/edit/:userId",
    component: AdminEditUser,
  },
  {
    path: "/admin/applications",
    component: AdminApplications,
  },
  {
    path: "/admin/applications/:appId",
    component: PassportApplicationSingle,
  },
  {
    path: "/admin/helpdesk",
    component: AdminHelpdesk,
  },
  {
    path: "/sitemap",
    component: Sitemap,
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
