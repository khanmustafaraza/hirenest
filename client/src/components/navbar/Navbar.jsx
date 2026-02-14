import React from "react";
import { NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import "./navbar.css";
import useAuth from "../../store/authcontext/AuthContext";

const Navbar = () => {
 const {state:{token}} =  useAuth()
 console.log(token)
  return (
    <nav className="navbar navbar-expand-lg hirenest-navbar fixed-top">
      <div className="container">
        {/* Brand */}
        <NavLink to="/" className="navbar-brand hirenest-brand">
          Hire<span>Nest</span>
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto align-items-center gap-lg-4">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/job-list" className="nav-link">
                Jobs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
             {
              token&& token? "Dashbaord" :  <NavLink to="/login" className="nav-link login-btn-nav">
                <FaSignInAlt style={{ marginRight: "5px" }} /> Login
              </NavLink> 
             }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
