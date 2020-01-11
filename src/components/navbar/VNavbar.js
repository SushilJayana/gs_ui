import React from "react";
import { Navbar, Form } from "react-bootstrap";
import CLogout from "../logout/CLogout";

function VNavbar(props) {
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="#home">Gym Square</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <CLogout {...props} />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default VNavbar;
