import React from "react";
import VDashboard from "./VDashboard";
import { Redirect } from "react-router-dom";

class CDashboard extends React.Component {
  render() {
    if (localStorage.getItem("token") === null)
      return (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      );

    return <VDashboard />;
  }
}

export default CDashboard;
