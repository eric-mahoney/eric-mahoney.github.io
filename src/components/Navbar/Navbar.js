import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">home</Link>
          </li>
          <li className="nav-link">
            <a href="#skills">skills</a>
          </li>
          <li className="nav-link">
            <a href="#projects">projects</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
