import React from "react";
import logo from "./memi-logo.png";
const NavBar = ({ children }) => {
  return (
    <nav className="navbar navbar-light  mb-5 ">
      <div className="container d-flex justify-content-center">
        <img
          src={logo}
          alt="logo"
          className="  mb-5 mr-5 mt-3"
          style={{ width:"8%" }}
        />

        {children}
      </div>
    </nav>
  );
};
export default NavBar;
