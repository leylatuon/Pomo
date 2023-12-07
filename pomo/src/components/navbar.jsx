import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Pomo</Link>
      </div>
      <div className="menu">
        <Link to="/study">
          <button className="login-btn">Study</button>
        </Link>
        <Link to="/sessions">
          <button className="login-btn">Sessions</button>
        </Link>
        <Link to="/login">
          <button className="login-btn">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
