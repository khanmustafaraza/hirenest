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
import JobList from "./pages/joblist/JobList";
import AdminJobList from "./pages/admin/adminjoblist/AdminJobList";
import JobDetails from "./pages/jobdetails/JobDetails";
import UserDashboard from "./pages/user/userdashbaord/UserDashboard";
import UserProfile from "./pages/user/userprofile/UserProfile";
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
        <Route path="/job-list" element={<JobList/>} />
        <Route path="/job-details/:id" element={<JobDetails/>} />

        {/* user Route */}

        <Route path = "/user-dashboard" element ={<UserDashboard/>}/>
        <Route path = "/add-user-profile" element ={<UserProfile/>}/>

        {/* ✔👀🔯 admin routes */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route path="admin-dashboard" element={<Dashboard />} />
          <Route path="add-job-category" element={<AddJobCategory />} />
          <Route path="job-category-list" element={<JobCategoryList />} />
          <Route path="admin-job-list" element={<AdminJobList />} />
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
