import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/notfound/Notfound";
import CLogin from "./components/login/CLogin";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact strict component={CLogin} />
          <PrivateRoute path="/dashboard" render={props => <Layout {...props} />} />
          <Redirect from="/" to="/dashboard" />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
