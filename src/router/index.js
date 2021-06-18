import React from "react";
import { Switch, Route } from "react-router-dom";
import Row from "../row";
import App from "../app";
function AppRouter() {
  return (
    <Switch>
      <Route path="/repo/:repoId" component={Row} exact />
      <Route path="" component={App} exact />
    </Switch>
  );
}

export default AppRouter;
