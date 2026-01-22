import React from "react";
import TopBar from "../topbar/TopBar";
import AdminFooter from "../adminfooter/AdminFooter";
import "./rightbar.css";

const RightBar = ({ children }) => {
  return (
    <main className="rightbar">
      <TopBar />

      <section className="rightbar-content">{children}</section>

      {/* <AdminFooter /> */}
    </main>
  );
};

export default RightBar;
