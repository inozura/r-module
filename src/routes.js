import React from "react";
import { Switch, Route } from "react-router-dom";
import Email from "./pages/Email";
import Overview from "./pages/Overview";
import Weblink from "./pages/Weblink";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Overview} />
        <Route path="/weblink" component={Weblink} />
        <Route path="/email" component={Email} />
      </Switch>
    </>
  );
};

export default Routes;
