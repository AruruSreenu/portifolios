import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "../Styles/Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p>Sreenu Aruru</p>
      </div>
      <div className="navbar-right">
        <ScrollLink to="about" smooth={true} duration={500}>
          About
        </ScrollLink>
        <ScrollLink to="project" smooth={true} duration={500}>
          Project
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>
          Contacts
        </ScrollLink>
      </div>
    </nav>
  );
};

export default NavBar;
