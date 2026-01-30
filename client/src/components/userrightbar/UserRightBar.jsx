import React from "react";
import UserTopBar from "../usertopbar/UserTopBar";

const UserRightBar = ({ children }) => {
  return (
    <div className="w-100" style={{minHeight:"100vh"}}>
      <UserTopBar />

      <div>{children}</div>
    </div>
  );
};

export default UserRightBar;
