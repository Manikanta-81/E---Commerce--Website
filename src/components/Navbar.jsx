import React from "react";
import "./styles/NavStyles.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-brand">My Brand</div>
      <div className="nav-link">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
