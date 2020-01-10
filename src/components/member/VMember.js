import React from "react";
import { Container, Col, Row, Table, Button } from "react-bootstrap";
import dateformat from "dateformat";

export default function VMember(props) {
  let gridData = null;
  if (props.gridData != null) {
    gridData = props.gridData.map(item => {
      return (
        <tr key={item._id} id={item._id}>
          <td>{item.username}</td>
          <td>{item.firstname + " " + item.lastname}</td>
          <td>{item.user_type === 1 ? "Admin" : "Normal"}</td>
          <td>{item.created_by === 1 ? "Admin" : "Interface"}</td>
          <td>{dateformat(item.created_date, "yyyy-mm-dd")}</td>
          <td>{dateformat(item.joined_date, "yyyy-mm-dd")}</td>
          <td>
            <Button variant="info" onClick={e => props.showEditForm(e)}>Edit</Button>
            <span> | </span>
            <Button variant="danger" onClick={e => props.handleDeleteMember(e)}>Delete</Button>
          </td>
        </tr>
      );
    });
  }

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
            <h4>Member Management</h4>

            <Button variant="success" onClick={e => { props.showAddForm(e); }}>
              Add Member
            </Button>
            <br />
            <br />
            <Table responsive bordered>
              <thead>
                <tr>
                  <th>UserName</th>
                  <th>Name</th>
                  <th>User Type</th>
                  <th>Created By</th>
                  <th>Created Date</th>
                  <th>Joined Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{gridData}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
