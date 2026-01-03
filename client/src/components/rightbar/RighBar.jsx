import React from "react";
import TopBar from "../topbar/TopBar";
import AdminFooter from "../adminfooter/AdminFooter";
import "./rightbar.css";

const RighBar = ({ children }) => {
  return (
    <div className="min" style={{ position: "relative" }}>
      <TopBar />
      <div className="p-1 mb-4">{children}</div>

      <AdminFooter />
    </div>
  );
};

export default RighBar;
