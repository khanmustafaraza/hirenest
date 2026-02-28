import React from "react";
import "./rightbar.css";
import LeftBar from "../leftbar/LeftBar";
import TopBar from "../topbar/TopBar";

const RightBar = ({ children }) => {
  return (
    <div className="rightbar-main-container">
      <div className="rightbar-container">
        <LeftBar />
        <div className="rightbar-content">
          <TopBar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
