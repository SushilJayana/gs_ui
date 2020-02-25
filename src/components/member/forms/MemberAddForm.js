import React from "react";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        <Modal.Title id="contained-modal-title-vcenter">{(props.formData.id) ? "Edit Member" : "Add new member"}</Modal.Title>
      </Modal.Header>
      <Form>
        <input type="hidden" id="member_id" defaultValue={(props.formData.id) ? props.formData.id : ""} />
        <input type="hidden" id="_ftoken" defaultValue={props.formToken !== "null" ? props.formToken : ""} />
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

          {
            (props.formData.id) ?
              <Form.Group as={Row} controlId="isPasswordUpdate">
                <Form.Label column md={3}></Form.Label>
                <Col md={9}><Form.Check type="checkbox" onChange={() => {
                  props.handlePasswordChange()
                }
                } /></Col>
              </Form.Group> :
              ""
          }

          <Form.Group as={Row} controlId="password">
            <Form.Label column md={3}>Password</Form.Label>
            <Col md={9}><Form.Control type="password"
              disabled={(props.formData.id) ? "disabled" : ""} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="user_type">
            <Form.Label column md={3}>User Type</Form.Label>
            <Col md={9}>
              <Form.Control as="select"s>
                <option value="" >Select</option>
                <option value="1" selected={(props.formData.user_type && props.formData.user_type === 1) ? "selected" : ""}>Admin</option>
                <option value="2" selected={(props.formData.user_type && props.formData.user_type === 2) ? "selected" : ""}>Normal</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="joined_date">
            <Form.Label column md={3}>Joined Date</Form.Label>
            <Col md={9}>
              <DatePicker id="joined_date" selected={props.startDate} onChange={props.handleChange} />
            </Col>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button variant="success" type="submit" onClick={e => {
            (props.formData.id) ? props.handleEditMember(e) : props.handleAddNewMember(e);
          }}>{(props.formData.id) ? "Edit" : "Save"}</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
