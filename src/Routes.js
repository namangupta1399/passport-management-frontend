import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About/About";
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
import Passport from "./components/AdminComponents/Passport";
import Contact from "./components/Contact";
import AdminRoute from "./Routes/AdminRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy/Privacy";
import Faqs from "./components/Faqs";
import PassportSingle from "./components/AdminComponents/Passport/PassportSingle";
import { default as ApplicantPassport } from "./components/ApplicantComponents/Passport";

export const routesList = [
  {
    path: "/",
    component: Home,
    type: "common",
  },
  {
    path: "/about",
    component: About,
    type: "common",
  },
  {
    path: "/contact",
    component: Contact,
    type: "common",
  },
  {
    path: "/terms",
    component: Terms,
    type: "common",
  },
  {
    path: "/privacy",
    component: Privacy,
    type: "common",
  },
  {
    path: "/signin",
    component: SignIn,
    type: "common",
  },
  {
    path: "/signup",
    component: SignUp,
    type: "common",
  },
  {
    path: "/faqs",
    component: Faqs,
    type: "common",
  },
  {
    path: "/user/profile",
    component: UserProfile,
    type: "common",
  },
  {
    path: "/applicant",
    component: Applicant,
    type: "applicant",
  },
  {
    path: "/applicant/helpdesk",
    component: ApplicantHelpdesk,
    type: "applicant",
  },
  {
    path: "/applicant/helpdesk/new",
    component: NewQuery,
    type: "applicant",
  },
  {
    path: "/applicant/passportApplication/new",
    component: NewPassportApplication,
    type: "applicant",
  },
  {
    path: "/applicant/passportApplication",
    component: PassportApplication,
    type: "applicant",
  },
  {
    path: "/applicant/passportApplication/edit",
    component: EditPassportApplication,
    type: "applicant",
  },
  {
    path: "/applicant/passport",
    component: ApplicantPassport,
    type: "applicant",
  },
  {
    path: "/admin",
    component: Admin,
    type: "admin",
  },
  {
    path: "/admin/users",
    component: AdminUsers,
    type: "admin",
  },
  {
    path: "/admin/users/new",
    component: AdminNewUser,
    type: "admin",
  },
  {
    path: "/admin/users/edit/:userId",
    component: AdminEditUser,
    type: "admin",
  },
  {
    path: "/admin/applications",
    component: AdminApplications,
    type: "admin",
  },
  {
    path: "/admin/applications/:appId",
    component: PassportApplicationSingle,
    type: "admin",
  },
  {
    path: "/admin/passports",
    component: Passport,
    type: "admin",
  },
  {
    path: "/admin/passports/:appNo",
    component: PassportSingle,
    type: "admin",
  },
  {
    path: "/admin/helpdesk",
    component: AdminHelpdesk,
    type: "admin",
  },
  {
    path: "/sitemap",
    component: Sitemap,
    type: "common",
  },
  {
    path: "/*",
    component: PageNotFound,
    type: "common",
  },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routesList.map((route, index) => {
          switch (route.type) {
            case "admin":
              return (
                <AdminRoute
                  key={index}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            case "applicant":
              return (
                <PrivateRoute
                  key={index}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            default:
              return (
                <Route
                  key={index}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
          }
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
