import React, { Component, useState } from "react";
import "./Footer.css";
import AuthService from "../Views/Account/services/auth.service";
import logoutIcon from "../Media/icons/logout.png";
import UserIcon from "../Media/icons/userIcon.png";
import { Redirect } from "react-router-dom";

function Footer() {
  const [redirect, setRedirect] = useState(false);
  const handleClick = () => {
    setRedirect(true);
    AuthService.logout();
    window.location.reload();
  };
  let userstatus = false;
  let user;
  if (localStorage.getItem("user") != undefined) {
    user = JSON.parse(localStorage.getItem("user"));
    userstatus = true;
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
          handleClick();
        }}
        src={logoutIcon}
      ></img>
    </div>
  );
}

export default Footer;