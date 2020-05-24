import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaRegEnvelope,
  FaUserAlt,
  FaHome,
  FaRegEye,
  FaCog
} from "react-icons/fa";
import "./MenuBar.css";

const MenuBar = function() {
  return (
    <div className="menu-bar">
      <div className="logo">hi</div>
      <nav className="pages-links links">
        <Link to='/' className="link">
           <FaHome className="page-link" /> 
           <b>Home</b> 
        </Link>
        <Link to='/about' className="link">
          <FaUserAlt className="page-link"/>  
          <b>About Me</b>
        </Link>
        <Link to='/skills' className="link">
            <FaCog className="page-link" />
            <b>My Skills</b>
        </Link>
        <Link to='/portfolio' className="link">
            <FaRegEye className="page-link" />
            <b>Portfolio</b>
        </Link>
        <Link to='/contact' className="link">
            <FaRegEnvelope className="page-link" />
            <b>Contact</b>
        </Link>
      </nav>
      <div className="external-links links">
        <a href='https://www.linkedin.com/in/ran-marciano-55318515b/' target="_blank"  rel="noopener noreferrer">
          <FaLinkedinIn className="external-link link" />
        </a>
        <a href='https://github.com/ranm13' target="_blank"  rel="noopener noreferrer">
          <FaGithub className="external-link link" />
        </a>
        <a href='https://www.facebook.com/ran.marziano.1' target="_blank"  rel="noopener noreferrer">
          <FaFacebookF className="external-link link" />
        </a>
        <a href='https://twitter.com/RanMarciano' target="_blank"  rel="noopener noreferrer">
          <FaTwitter className="external-link link" />
        </a>
      </div>
    </div>
  );
};
export default MenuBar;
