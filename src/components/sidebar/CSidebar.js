import React from "react";
import VSidebar from "./VSidebar";
import "./sidebar.css";

class CSidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      showSidebar: true
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();

    if (this.state.showSidebar) {
      document.getElementById("wrapper").className = "show-sidebar";
      this.setState({ showSidebar: false });
    } else {
      document.getElementById("wrapper").classList.remove("show-sidebar");
      this.setState({ showSidebar: true });
    }
  }

  render() {
    return <VSidebar toggleMenu={this.toggleMenu} />;
  }
}

export default CSidebar;
