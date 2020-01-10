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
      startDate: new Date(),
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
    this.handleAddNewMember = this.handleAddNewMember.bind(this);

    this.showEditForm = this.showEditForm.bind(this);
    this.handleEditMember = this.handleEditMember.bind(this);
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

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  toggleModalAppear(showFlag) {
    this.setState({
      modalShow: showFlag
    });
  }

  //Add Form
  showAddForm(e) {
    e.preventDefault();

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

  handleAddNewMember(e) {
    e.preventDefault();

    const postData = {
      username: e.target.form.elements.username.value,
      firstname: e.target.form.elements.firstname.value,
      lastname: e.target.form.elements.lastname.value,
      user_type: e.target.form.elements.user_type.value,
      created_by: 1,
      password: e.target.form.elements.password.value,
      joined_date: e.target.form.elements.joined_date.value
    };

    fetch("http://localhost:3005/api/gs/member/add", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
        "auth-token": e.target.form.elements._ftoken.value
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

    const id = e.target.parentNode.parentElement.id;

    fetch("http://localhost:3005/api/gs/token")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          formToken: data.token
        });

        //data
        fetch("http://localhost:3005/api/gs/member/" + id)
          .then(results => {
            return results.json();
          })
          .then(data => {

            this.setState({
              formData: {
                id: id,
                username: data.username,
                firstname: data.firstname,
                lastname: data.lastname,
                user_type: data.user_type,
                password: data.password,
                joined_date: data.joined_date
              },
              startDate: new Date(data.joined_date)
            });
            this.toggleModalAppear(true);
          });
      });
  }

  handleEditMember(e) {
    e.preventDefault();

    const id = e.target.form.elements.member_id.value;

    const postData = {
      username: e.target.form.elements.username.value,
      firstname: e.target.form.elements.firstname.value,
      lastname: e.target.form.elements.lastname.value,
      user_type: e.target.form.elements.user_type.value,
      password: e.target.form.elements.password.value,
      joined_date: e.target.form.elements.joined_date.value
    };

    fetch("http://localhost:3005/api/gs/member/update/" + id, {
      method: "PUT",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
        "auth-token": e.target.form.elements._ftoken.value
      }
    })
      .then(results => results.json())
      .then(data => {
       
       this.toggleModalAppear(false);
       this.props.history.push("/member");
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

          startDate={this.state.startDate}
          handleChange={this.handleChange}

          handleAddNewMember={this.addNewMember}
          handleEditMember={this.handleEditMember}

          formToken={this.state.formToken}
          formData={this.state.formData}
        />
      </Fragment>
    );
  }
}
