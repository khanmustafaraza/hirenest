import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBriefcase,
  FaPlus,
  FaBookmark,
  FaTags,
  FaRegRegistered,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoMdList } from "react-icons/io";
import "./leftbar.css";

const navLinks = [
  {
    to: "/admin/admin-dashboard",
    label: "Dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    to: "/admin/add-job-category",
    label: "Add Job Category",
    icon: <MdCategory />,
  },
  {
    to: "/admin/job-category-list",
    label: "Job Category List",
    icon: <IoMdList />,
  },
  { to: "/admin/users", label: "Users", icon: <FaUsers /> },
  { to: "/admin/jobs", label: "Jobs", icon: <FaBriefcase /> },
  { to: "/admin/add-post", label: "Add Job", icon: <FaPlus /> },
  { to: "/admin/saved-posts", label: "Saved", icon: <FaBookmark /> },
  {
    to: "/admin/register-user",
    label: "Registrations",
    icon: <FaRegRegistered />,
  },
  { to: "/admin/applications", label: "Applications", icon: <FaTags /> },
];

const LeftBar = () => {
  return (
    <aside className="leftbar">
      {/* Brand */}
      <div className="leftbar-brand">
        Hire<span>Nest</span>
      </div>

      {/* Navigation */}
      <nav className="leftbar-nav">
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span className="nav-icon">{link.icon}</span>
            <span className="nav-label">{link.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="leftbar-footer">
        <NavLink to="/logout" className="logout-btn">
          <FaSignOutAlt />
          <span>Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default LeftBar;
