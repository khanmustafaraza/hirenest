import React from "react";
import { FaBell, FaCog, FaSearch } from "react-icons/fa";
import "./usertopbar.css";

const UserTopBar = ({ user }) => {
  return (
    <div className="user-topbar">

      {/* Left: Greeting */}
      <div className="topbar-left">
        <h2>Welcome, {user?.name || "User"}</h2>
        <p>Here's your dashboard overview</p>
      </div>

      {/* Right: Actions */}
      <div className="topbar-right">

        {/* Search */}
        <div className="topbar-search">
          <input type="text" placeholder="Search jobs or companies..." />
          <FaSearch className="search-icon" />
        </div>

        {/* Notifications */}
        <button className="topbar-btn">
          <FaBell />
          <span className="badge">3</span>
        </button>

        {/* Settings */}
        <button className="topbar-btn">
          <FaCog />
        </button>

        {/* User Avatar */}
        <div className="user-avatar">
          {user?.profilePic ? (
            <img src={user.profilePic} alt="User" />
          ) : (
            <span>{user?.name?.charAt(0) || "U"}</span>
          )}
        </div>

      </div>
    </div>
  );
};

export default UserTopBar;
