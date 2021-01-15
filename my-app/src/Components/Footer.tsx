import React, { Component } from "react";
import "./Footer.css";
import AuthService from "../Views/Account/services/auth.service";
import jwt_decode from "jwt-decode";
import { User } from "../Views/Account/models/User";
// import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { Navbar } from "react-bootstrap";
// import { NavbarBrand } from "react-bootstrap";
import logoutIcon from "../Media/icons/logout.png";
import UserIcon from "../Media/icons/userIcon.png";

class Footer extends Component {
  render() {
    let userstatus = false;
    let user;
    if (localStorage.getItem("user") != undefined) {
      user = JSON.parse(localStorage.getItem("user"));
      userstatus = true;
      console.log(user);
      console.log(user.user.email);
    } else {
      user = "No user";
    }

    if (window.location.pathname === "/login") return null;
    return (
      <div id="Footer">
        <div className="inline">
          <img className="userIcon" src={UserIcon}></img>
          {userstatus && <div className="userEmailText">{user.user.email}</div>}
        </div>
        <img
          className="logoutIcon"
          onClick={() => {
            AuthService.logout();
          }}
          src={logoutIcon}
        ></img>
      </div>
    );
  }
}

export default Footer;
