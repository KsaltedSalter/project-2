import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="navbar is-link">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/all" className="navbar-item">
            Star Signs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
