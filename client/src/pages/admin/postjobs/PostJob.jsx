import React, { useState } from "react";
import LeftBar from "../../../components/leftbar/LeftBar";
import PostForm from "../../../components/form/PostForm";
import RightBar from "../../../components/rightbar/RightBar";

const PostJob = () => {
  return (
    <RightBar>
      <PostForm />
    </RightBar>
  );
};

export default PostJob;
