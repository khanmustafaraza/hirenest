import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBriefcase,
  FaSignOutAlt,
  FaPlus,
  FaBookmark,
  FaTags,
  FaRegRegistered,
} from "react-icons/fa";
import "./leftbar.css";

const navLinks = [
  { to: "/admin/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
  { to: "/admin/users", label: "Manage Users", icon: <FaUsers /> },
  { to: "/admin/jobs", label: "Manage Jobs", icon: <FaBriefcase /> },
  { to: "/admin/add-post", label: "Add Post", icon: <FaPlus /> },
  { to: "/admin/saved-posts", label: "Saved Posts", icon: <FaBookmark /> },
  {
    to: "/admin/register-user",
    label: "Register List",
    icon: <FaRegRegistered />,
  },
  { to: "/admin/applications", label: "Applications", icon: <FaTags /> },
];

const LeftBar = () => {
  return (
    <div className="leftbar-container">
      <div className="leftbar-header">
        <strong>JobPortal</strong>
      </div>

      <ul className="nav-links">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="left-icon"> {link.icon}</span> {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="logout">
        <NavLink to="/logout" className="logout-link">
          <FaSignOutAlt /> Logout
        </NavLink>
      </div>
    </div>
  );
};

export default LeftBar;
