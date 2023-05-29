import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo}></img>
          </Link>
        </div>
        <div className="links">
          <Link to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link to="/?cat=art">
            <h6>SCIENCE</h6>
          </Link>
          <Link to="/?cat=art">
            <h6>POLITICS</h6>
          </Link>
          <Link to="/?cat=art">
            <h6>FOOD</h6>
          </Link>
          <Link to="/?cat=art">
            <h6>HEALTH</h6>
          </Link>
          <span>Nishan</span>
          <span>Logout</span>
          <span className="write">
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
