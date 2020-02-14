import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import CDashboard from "./components/dashboard/CDashboard";
import CMember from "./components/member/CMember";
import NotFound from "./components/notfound/Notfound";
import CSidebar from "./components/sidebar/CSidebar";
import CNavbar from "./components/navbar/CNavbar";

import CLogin from "./components/login/CLogin"

export default function Layout(props) {
  return (
    <Router>
      <React.Fragment>
        <CNavbar {...props} />
        <div id="wrapper">
          <CSidebar />
          <Switch>          
            <Route path="/dashboard" exact strict component={CDashboard} />
            <Route path="/member" exact strict component={CMember} />
            <Route path="/gym-package" exact strict component={CDashboard} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}
