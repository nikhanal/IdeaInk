import React from "react";
import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made by NIKH and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
