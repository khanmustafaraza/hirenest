import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import ManageUsers from "./pages/admin/manageusers/ManageUsers";
import ManageJobs from "./pages/admin/managejobs/ManageJobs";
import Applications from "./pages/admin/applications/Application";
import PostJob from "./pages/admin/postjobs/PostJob";
import RegisterList from "./pages/admin/registerlist/RegisterList";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Register from "./pages/auth/register/Register";
import { ToastContainer, toast } from "react-toastify";
import AdminRoute from "./routes/adminroute/AdminRoute";
import AddJobCategory from "./pages/admin/jobcategory/AddJobCategory";
import JobCategoryList from "./pages/admin/jobcategory/JobCategoryList";
// import Protected from "./routes/Protected";
// import PostJob from "./pages/admin/postjob/PostJob";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* ✔👀🔯 admin routes */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route path="admin-dashboard" element={<Dashboard />} />
          <Route path="add-job-category" element={<AddJobCategory />} />
          <Route path="job-category-list" element={<JobCategoryList />} />
          <Route path="/admin/jobs" element={<ManageJobs />} />
          <Route path="/admin/saved-posts" element={<ManageJobs />} />
          <Route path="/admin/applications" element={<Applications />} />
          <Route path="/admin/add-post" element={<PostJob />} />
          <Route path="/admin/register-user" element={<RegisterList />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
