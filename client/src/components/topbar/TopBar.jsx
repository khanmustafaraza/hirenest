import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-1 py-3  topbar-container border-bottom">
      {/* Left: Logo or Page Title */}
      <div className="fw-bold">Job Portal Admin</div>

      {/* Right: Actions */}
      <div className="d-flex align-items-center gap-2">
        {/* Notifications */}
        <div className="position-relative">
          <FaBell size={20} className="" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="d-flex align-items-center">
          <FaUserCircle size={24} className="me-2 text-secondary" />
          <span className="fw-medium text-dark">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
