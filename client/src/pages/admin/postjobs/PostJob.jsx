import React, { useState } from "react";
import LeftBar from "../../../components/leftbar/LeftBar";
import RighBar from "../../../components/rightbar/RighBar";
import PostForm from "../../../components/form/PostForm";

const PostJob = () => {
  return (
    <div className="d-flex">
      <LeftBar />
      <RighBar>
        <PostForm />
      </RighBar>
    </div>
  );
};

export default PostJob;
