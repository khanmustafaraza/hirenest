import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import "./topbar.css";

const TopBar = () => {
  return (
    <header className="topbar">
      {/* Left */}
      <h6 className="topbar-title">Dashboard</h6>

      {/* Right */}
      <div className="topbar-actions">
        <div className="notification">
          <FaBell className="topbar-icon" />
          <span className="notification-dot"></span>
        </div>

        <div className="profile">
          <FaUserCircle className="topbar-icon" />
          <span className="profile-name">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
