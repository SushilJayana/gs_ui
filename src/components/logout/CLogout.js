import React from "react";
import { Button } from "react-bootstrap";

class CLogout extends React.Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(event) {
    event.preventDefault();

    localStorage.removeItem("token");
    window.location.href = "/login"
    
  }
  render() {
    return (
      <Button
        variant="link"
        type="submit"
        onClick={event => this.handleLogout(event)}
      >
        Logout
      </Button>
    );
  }
}

export default CLogout;
