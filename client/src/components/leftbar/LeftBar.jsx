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
  {
    to: "/admin/add-job-category",
    label: "Add Job Category",
    icon: MdCategory,
  },
  {
    to: "/admin/job-category-list",
    label: "Job Category List",
    icon: IoMdList,
  },
  { to: "/admin/add-post", label: "Add Job", icon: FaPlus },
  { to: "/admin/admin-job-list", label: "Jobs List", icon: FaBriefcase },
  { to: "/admin/users-list", label: "Users List", icon: FaUsers },
  { to: "/admin/job-applications", label: " Job Applications", icon: FaTags },
];

const LeftBar = () => {
  return (
    <aside className="leftbar">
      <nav className="leftbar-nav">
        <div className="leftbar-brand">
          <h5>
            Hire<span>Nest</span>
          </h5>
        </div>
        {navLinks.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <Icon className="leftbar-icon" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* <div className="leftbar-footer">
        <button className="logout-btn">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div> */}
    </aside>
  );
};

export default LeftBar;
