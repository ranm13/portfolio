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
import "./NavBar.css";

const NavBar = function() {
  return (
    <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
        <div className="nav-link">
          <span className="link-text logo-text">Logo</span>
        </div>
      </li>

      <li className="nav-item">
        <Link to='/' className="nav-link">
           <FaHome className="page-link" /> 
           <span className="link-text">Home</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to='/about' className="nav-link">
           <FaUserAlt className="page-link" /> 
           <span className="link-text">About Me</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to='/skills' className="nav-link">
           <FaCog className="page-link" /> 
           <span className="link-text">My Skills</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to='/portfolio' className="nav-link">
           <FaRegEye className="page-link" /> 
           <span className="link-text">Portfolio</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to='/contact' className="nav-link">
           <FaRegEnvelope className="page-link" /> 
           <span className="link-text">Contact</span>
        </Link>
      </li>

      
      <li className="nav-item external-links">
          <a href='https://www.linkedin.com/in/ran-marciano-55318515b/' target="_blank"  rel="noopener noreferrer"  className="nav-link external">
            <FaLinkedinIn className="external-link link" />
          </a>
          <a href='https://github.com/ranm13' target="_blank"  rel="noopener noreferrer"  className="nav-link external">
            <FaGithub className="external-link link" />
          </a>
          <a href='https://www.facebook.com/ran.marziano.1' target="_blank"  rel="noopener noreferrer"  className="nav-link external">
            <FaFacebookF className="external-link link" />
          </a>
          <a href='https://twitter.com/RanMarciano' target="_blank"  rel="noopener noreferrer"  className="nav-link external">
            <FaTwitter className="external-link link" />
          </a>
      </li>


    </ul>
  </nav>
  );
};
export default NavBar;
