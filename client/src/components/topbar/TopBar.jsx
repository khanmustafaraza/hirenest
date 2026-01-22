import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import "./topbar.css";

const TopBar = () => {
  return (
    <header className="topbar d-flex align-items-center justify-content-between px-4 py-2 bg-white shadow-sm">
      {/* Left */}
      <h6 className="mb-0 fw-semibold text-dark">Dashboard</h6>

      {/* Right */}
      <div className="topbar-actions d-flex align-items-center gap-3">
        <div className="notification position-relative">
          <FaBell className="icon" />
          <span className="dot"></span>
        </div>

        <div className="profile d-flex align-items-center gap-2">
          <FaUserCircle className="icon" />
          <span className="fw-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
