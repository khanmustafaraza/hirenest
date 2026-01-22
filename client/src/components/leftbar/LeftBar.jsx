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
  { to: "/admin/admin-dashboard", label: "Dashboard", icon: FaTachometerAlt },
  { to: "/admin/add-job-category", label: "Add Job Category", icon: MdCategory },
  { to: "/admin/job-category-list", label: "Job Category List", icon: IoMdList },
  { to: "/admin/users", label: "Users", icon: FaUsers },
  { to: "/admin/jobs", label: "Jobs", icon: FaBriefcase },
  { to: "/admin/add-post", label: "Add Job", icon: FaPlus },
  { to: "/admin/saved-posts", label: "Saved", icon: FaBookmark },
  { to: "/admin/register-user", label: "Registrations", icon: FaRegRegistered },
  { to: "/admin/applications", label: "Applications", icon: FaTags },
];

const LeftBar = () => {
  return (
    <aside className="leftbar bg-dark text-light">
      {/* Brand */}
      <div className="leftbar-brand text-center py-2 border-bottom">
        <h5 className="mb-0 fw-bold">
          Hire<span className="text-info">Nest</span>
        </h5>
      </div>

      {/* Navigation */}
      <nav className="leftbar-nav nav flex-column py-3">
        {navLinks.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-2 px-3 py-2 mb-1 rounded 
              ${isActive ? "active-link" : "text-light"}`
            }
          >
            <Icon className="nav-icon" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="leftbar-footer border-top p-3">
        <button className="btn btn-outline-danger w-100 d-flex align-items-center gap-2">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default LeftBar;
