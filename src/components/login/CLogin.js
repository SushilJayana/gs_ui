import React from "react";
import VLogin from "./VLogin.js";
import "./login.css";
import { connect } from "react-redux";

class CLogin extends React.Component {
  constructor() {
    super();
    this.submitLogin = this.submitLogin.bind(this);
  }

  componentWillMount() {
    if (this.props.isLoggedIn || localStorage.getItem("token")) {
      this.props.history.push("/dashboard");
    }
  }

  submitLogin(event) {
    event.preventDefault();

    //this.props.toggleLoggedStatus();
    //return;

    const username = event.target.form.elements.username.value;
    const password = event.target.form.elements.password.value;

    if (username === "" || password === "") {
      alert(" please fill both");
      return false;
    }

    fetch("http://localhost:3005/api/gs/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(results => results.json())
      .then(data => {
        if (data.token && data.message === "authenticated") {
          localStorage.setItem("token", data.token);
          this.props.toggleLoggedStatus();
          this.props.history.push("/dashboard");
        } else {
          alert(data.message);
        }
      });
  }

  render() {
    return (
      <div>
        <h1>{this.props.isLoggedIn ? "Logged IN" : "Not Logged IN"}</h1>
        <VLogin submitLogin={this.submitLogin} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLoggedStatus: () => {
      dispatch({ type: "SIGN_IN" });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CLogin);
