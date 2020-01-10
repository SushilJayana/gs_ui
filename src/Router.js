import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/notfound/Notfound";
import CLogin from "./components/login/CLogin";
import Layout from "./Layout";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact strict component={CLogin} />
          <Route path="/" render={props => <Layout {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
