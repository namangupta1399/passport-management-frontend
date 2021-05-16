import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import PageNotFound from "./components/PageNotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
