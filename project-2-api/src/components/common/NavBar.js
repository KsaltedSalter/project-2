import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/all" className="navbar-item">
            All Signs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
