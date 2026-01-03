import React, { useState } from "react";
import LeftBar from "../../../components/leftbar/LeftBar";
import RighBar from "../../../components/rightbar/RighBar";
import { FaPlus } from "react-icons/fa";
import PostForm from "../../../components/form/PostForm";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    category: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Job:", formData);
    // 🔁 Replace with API call
  };

  return (
    <div className="d-flex">
      <LeftBar />
      <RighBar>
        {/* <div className="container mt-4 px-3">
          <h4 className="fw-bold mb-4">Post New Job</h4>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label className="form-label">Job Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Job Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="form-select"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Contract</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Salary</label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="col-12">
              <label className="form-label">Job Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="col-12">
              <button className="btn btn-success">
                <FaPlus className="me-2" />
                Post Job
              </button>
            </div>
          </form>
        </div> */}
        <PostForm />
      </RighBar>
    </div>
  );
};

export default PostJob;
