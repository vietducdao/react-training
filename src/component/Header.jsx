import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/staff-management" className="nav-link">
              Staff Management
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/form" className="nav-link">
              Contact Form
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/time" className="nav-link">
              clearInterval
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">
              UserForm
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
