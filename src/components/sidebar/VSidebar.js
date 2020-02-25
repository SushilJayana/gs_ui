import React from "react";
import { NavLink } from "react-router-dom";

function VSidebar(params) {
  return (
    <div id="sidebar-wrapper">
      <ul id="sidebar-nav">
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/member">Member</NavLink>
        </li>
        <li>
          <NavLink to="/gym-package">Packages</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default VSidebar;
