import React from "react";
import { Container, Row, Form, Button, Image } from "react-bootstrap";
import brandLogo from "../../../src/assests/images/brand.png";

function VLogin(params) {
  return (
    <div id="login-section">
      <Container>
        <Row>
          <Image src={brandLogo}></Image>
        </Row>
        <Row>
          <Form>
            <Form.Group controlId="username">
              <Form.Control type="text" placeholder="Username"></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Control type="password" placeholder="Password"></Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={event => params.submitLogin(event)}>Login</Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}
export default VLogin;
