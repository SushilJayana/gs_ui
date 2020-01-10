import React, { Fragment } from "react";
import VMember from "./VMember";
import MemberAddForm from "./forms/MemberAddForm";

export default class CMember extends React.Component {
  constructor() {
    super();
    this.state = {
      members: null,
      modalShow: false,
      formToken: null,
      formData: {
        id: "",
        username: "",
        firstname: "",
        lastname: "",
        user_type: "",
        password: "",
        joined_date: ""
      }
    };

    this.toggleModalAppear = this.toggleModalAppear.bind(this);
    this.showAddForm = this.showAddForm.bind(this);
    this.addNewMember = this.addNewMember.bind(this);

    this.showEditForm = this.showEditForm.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3005/api/gs/member")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          members: data
        });
      });
  }

  toggleModalAppear(showFlag) {
    this.setState({
      modalShow: showFlag
    });
  }

  //Add Form
  showAddForm(event) {
    fetch("http://localhost:3005/api/gs/token")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          formToken: data.token
        });

        this.toggleModalAppear(true);
      });
  }

  addNewMember(event) {
    event.preventDefault();

    const postData = {
      username: event.target.form.elements.username.value,
      firstname: event.target.form.elements.firstname.value,
      lastname: event.target.form.elements.lastname.value,
      user_type: event.target.form.elements.user_type.value,
      created_by: 1,
      password: event.target.form.elements.password.value,
      joined_date: event.target.form.elements.joined_date.value
    };

    fetch("http://localhost:3005/api/gs/member/add", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
        "auth-token": event.target.form.elements._ftoken.value
      }
    })
      .then(results => results.json())
      .then(data => {
        this.toggleModalAppear(false);
        this.props.history.push("/member");
      });
  }

  //Edit Form

  showEditForm(e) {
    e.preventDefault();

    const _id = e.target.parentNode.parentElement.id;

    fetch("http://localhost:3005/api/gs/token")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          formToken: data.token
        });

        //data
        fetch("http://localhost:3005/api/gs/member/" + _id)
          .then(results => {
            return results.json();
          })
          .then(data => {

            this.setState({
              formData: {
                id: _id,
                username: data.username,
                firstname: data.firstname,
                lastname: data.lastname,
                user_type: data.user_type,
                password: data.password,
                joined_date: data.joined_date
              }
            });
            this.toggleModalAppear(true);
          });
      });
  }

  render() {
    return (
      <Fragment>
        <VMember
          gridData={this.state.members}
          showAddForm={this.showAddForm}
          showEditForm={this.showEditForm}
        />
        <MemberAddForm
          show={this.state.modalShow}
          onHide={() => this.toggleModalAppear(false)}
          addNewMember={this.addNewMember}
          formToken={this.state.formToken}
          formData={this.state.formData}
        />
      </Fragment>
    );
  }
}
