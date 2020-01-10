import React from "react";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";

export default function MemberAddForm(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add new member</Modal.Title>
      </Modal.Header>
      <Form>
        <input type="hidden" id="_ftoken" defaultValue={props.formToken !== "null" ? props.formToken : ""}
        />
        <Modal.Body>
          <Form.Group as={Row} controlId="firstname">
            <Form.Label column md={3}> Firstname </Form.Label>
            <Col md={9}><Form.Control type="text"
              defaultValue={(props.formData.firstname) ? props.formData.firstname : ""} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="lastname">
            <Form.Label column md={3}>Lastname</Form.Label>
            <Col md={9}><Form.Control type="text"
              defaultValue={(props.formData.lastname) ? props.formData.lastname : ""} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="username">
            <Form.Label column md={3}>Username</Form.Label>
            <Col md={9}><Form.Control type="text"
              defaultValue={(props.formData.username) ? props.formData.username : ""} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="password">
            <Form.Label column md={3}>Password</Form.Label>
            <Col md={9}><Form.Control type="password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="user_type">
            <Form.Label column md={3}>User Type</Form.Label>
            <Col md={9}>
              <Form.Control as="select">
                <option value="" >Select</option>
                <option value="1" selected={(props.formData.user_type && props.formData.user_type === 1) ? "selected" : ""}>Admin</option>
                <option value="2" selected={(props.formData.user_type && props.formData.user_type === 2) ? "selected" : ""}>Normal</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="joined_date">
            <Form.Label column md={3}>Joined Date</Form.Label>
            <Col md={9}><Form.Control type="date"
              defaultValue={(props.formData.joined_date) ? props.formData.joined_date : ""} />
            </Col>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button variant="success" type="submit" onClick={e => { props.addNewMember(e); }}>Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}