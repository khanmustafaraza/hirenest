import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import "./topbar.css";

const TopBar = () => {
  return (
    <header className="topbar">
      {/* Left */}
      <div className="topbar-title">Dashboard</div>

      {/* Right */}
      <div className="topbar-actions">
        <div className="notification">
          <FaBell />
          <span className="dot"></span>
        </div>

        <div className="profile">
          <FaUserCircle />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
