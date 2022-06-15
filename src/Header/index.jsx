import React from "react";
import "./Header.css";

const Header = ({ title, text }) => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-logo-text">
          <img
            src="../../media/logo.png"
            alt="react-logo"
            style={{ paddingRight: "7px" }}
          ></img>
          <div className="header-text-left"> {title}</div>
        </div>
        <div className="header-text-right">{text}</div>
      </div>
    </div>
  );
};

export default Header;
