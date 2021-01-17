import React, { Fragment } from "react";
import VMember from "./VMember";
import MemberAddForm from "./forms/MemberAddForm";
import { connect } from "react-redux";

class CMember extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: null,
      modalShow: false,
      startDate: new Date(),
      formData: {
        id: "",
        username: "",
        firstname: "",
        lastname: "",
        user_type: "",
        password: "",
        joined_date: ""
      },
      passwordDisabled: true
    };

    this.toggleModalAppear = this.toggleModalAppear.bind(this);
    this.showAddForm = this.showAddForm.bind(this);
    this.handleAddNewMember = this.handleAddNewMember.bind(this);

    this.showEditForm = this.showEditForm.bind(this);
    this.handleEditMember = this.handleEditMember.bind(this);

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleDeleteMember = this.handleDeleteMember.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3005/api/gs/member")
      .then(results => { return results.json(); })
      .then(data => { this.setState({ members: data }); });
  }

  handleChange = date => {
    this.setState({ startDate: date });
  };

  toggleModalAppear(showFlag) {
    this.setState({ modalShow: showFlag });
  }

  handlePasswordChange() {
    document.getElementById('password').disabled = !(this.state.passwordDisabled);
    this.setState({ passwordDisabled: !(this.state.passwordDisabled) });
  }

  //Add Form
  showAddForm(e) {
    e.preventDefault();
    this.setState({ formData: { id: "" }, startDate: new Date() });
    this.toggleModalAppear(true);
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

        if (!data.status) { alert(data.message); return false; }

        let finalMemberArray = this.state.members;
        finalMemberArray.push(data.payload);
        this.setState({ members: finalMemberArray })
        this.toggleModalAppear(false);

      });
  }

  //Edit Form

  showEditForm(e) {
    e.preventDefault();

    const id = e.target.parentNode.parentElement.id;
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
      }).catch(err => {
        alert(err.message);
      });
  }

  handleEditMember(e) {
    e.preventDefault();

    const id = e.target.form.elements.member_id.value;

    const postData = {
      username: e.target.form.elements.username.value,
      firstname: e.target.form.elements.firstname.value,
      lastname: e.target.form.elements.lastname.value,
      user_type: parseInt(e.target.form.elements.user_type.value),
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

        if (!data.status) { alert(data.message); return false; }

        delete postData.password;
        postData._id = id;
        let finalMemberArray = (this.state.members).filter(member => member._id !== id);
        finalMemberArray.push(postData)
        this.setState({ formData: { id: "" }, members: finalMemberArray });
        this.toggleModalAppear(false);
      });
  }

  //Delete Member
  handleDeleteMember(e) {
    e.preventDefault();

    const confirmation = window.confirm("Are you sure you want to delete? ");
    if (!confirmation) { return false; }

    const id = e.target.parentNode.parentElement.id;
    const postData = { id: id };

    fetch("http://localhost:3005/api/gs/member/remove/" + id, {
      method: "DELETE",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    })
      .then(results => results.json())
      .then(data => {
        const finalMemberArray = (this.state.members).filter(member => member._id !== id);
        this.setState({ members: finalMemberArray });
      });
  }

  render() {
    return (
      <Fragment>
        <VMember
          gridData={this.state.members}
          showAddForm={this.showAddForm}
          showEditForm={this.showEditForm}

          handleDeleteMember={this.handleDeleteMember}
        />
        <MemberAddForm
          show={this.state.modalShow}
          onHide={() => this.toggleModalAppear(false)}

          /* show={this.props.formStatistics.showDialog}
          onHide={() => this.props.toggleModalAppear("HIDE",null)} */

          handlePasswordChange={this.handlePasswordChange}

          startDate={this.state.startDate}
          handleChange={this.handleChange}

          handleAddNewMember={this.handleAddNewMember}
          handleEditMember={this.handleEditMember}

          formToken={localStorage.getItem("token")}
          formData={this.state.formData}
        />
      </Fragment>
    );
  }
}

export default CMember;
//export default connect(mapStateToProps, mapDispatchToProps)(CMember);