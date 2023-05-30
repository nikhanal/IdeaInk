import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/authContext.jsx";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
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
          <Link to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link to="/?cat=politics">
            <h6>POLITICS</h6>
          </Link>
          <Link to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <Link to="/?cat=health">
            <h6>HEALTH</h6>
          </Link>
          {currentUser ? <span>{currentUser.username}</span> : null}
          {currentUser ? (
            <Link to="/" className="link" onClick={logout}>
              Logout
            </Link>
          ) : (
            <Link to="/login" className="link">
              Login
            </Link>
          )}
          <span className="write">
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
