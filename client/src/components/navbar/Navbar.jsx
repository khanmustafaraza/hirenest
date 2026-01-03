import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { state } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg hirenest-navbar fixed-top">
      <div className="container-fluid px-4">
        {/* Brand */}
        <NavLink to="/" className="navbar-brand hirenest-brand">
          Hire<span>Nest</span>
        </NavLink>

        {/* Toggle */}
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto align-items-center gap-4">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/jobs" className="nav-link">
                Jobs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>

            {state?.user?.token ? (
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle account-link"
                  data-bs-toggle="dropdown"
                >
                  <FaUserCircle className="me-1 fs-5" />
                  Account
                </span>

                <ul className="dropdown-menu dropdown-menu-end shadow">
                  <li>
                    <NavLink className="dropdown-item" to="/dashboard">
                      Dashboard
                    </NavLink>
                  </li>

                  {state.user.isAdmin && (
                    <>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/admin/dashboard"
                        >
                          Admin Panel
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink to="/login" className="btn hirenest-login-btn">
                  Login
                </NavLink>
              </li>
            )}
          </ul>

          {/* Search */}
          <form className="d-flex hirenest-search">
            <input
              type="search"
              className="form-control"
              placeholder="Search jobs, skills..."
            />
            <button className="btn">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
