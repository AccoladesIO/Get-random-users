import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar-wrapper">
        <div className="navbar">
          <h2 className="heading-nav">Accolades</h2>
          <div className="links">
            <Link to="/" className='link'>
              Home
            </Link>
            <Link to="/user" className='link'>
              User
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
