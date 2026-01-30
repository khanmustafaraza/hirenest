import React from "react";
import { FaBars, FaUser, FaUserAltSlash, FaBriefcase } from "react-icons/fa";
import "./userleftbar.css";
import { NavLink } from "react-router-dom";

const UserLeftBar = ({ user }) => {
  const userNavItems = [
    { _id: 0, name: "Dashboard", icon: <FaBars />, link: "/user-dashboard" },
    { _id: 1, name: "Add Profile", icon: <FaUser />, link: "/add-user-profile" },
    { _id: 2, name: "Profile", icon: <FaUserAltSlash />, link: "/user-profile-list" },
    { _id: 3, name: "Applied Job List", icon: <FaBriefcase />, link: "/apply-job-list" },
  ];

  return (
    <div className="user-leftbar">

      {/* Profile Card */}
      <div className="profile-card">
        {user?.profilePic ? (
          <img src={user.profilePic} alt="Profile" className="profile-pic" />
        ) : (
          <div className="profile-placeholder">{user?.name?.charAt(0)}</div>
        )}
        <h2>{user?.name || "User Name"}</h2>
        <p>{user?.email || "user@example.com"}</p>
      </div>

      {/* Navigation Menu */}
      <ul className="leftbar-menu">
        {userNavItems.map((item) => (
          <li key={item._id}>
            <NavLink
              to={item.link}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              <span className="icon">{item.icon}</span>
              <span className="link-text">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserLeftBar;
