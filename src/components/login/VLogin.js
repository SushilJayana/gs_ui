import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
/* import brandLogo from "../../../src/assests/images/gym.png"; */

function VLogin(params) {
  return (

    <Container>

      <div className="card card-login mx-auto text-center bg-dark">

        <div className="card-header mx-auto bg-dark">
          <span>
            <img src="https://amar.vote/assets/img/amarVotebd.png" className="w-75" alt="Logo" />
          </span><br />
          <span className="logo_title mt-5"> Login Dashboard </span>
          <br />
          <span id="message">{params.message}</span>
        </div>

        <div className="card-body">
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
        </div>
      </div>
    </Container>

  );
}
export default VLogin;
