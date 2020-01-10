import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function VDashboard() {
  return (
    <div id="page-content-wrapper">
      <Container>
        <Row>
          <Col md={12}>
            {/* <a
                href="#"
                className="button"
                id="menu-toggle"
                onClick={e => {
                  params.toggleMenu(e);
                }}
              >
                Toggle Menu
              </a> */}
            <h1>Sidebar</h1>
            <p>Hello i am the first paragraph of Dashboard</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default VDashboard;
