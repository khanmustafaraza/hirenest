import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaPlus,
  FaTrash,
  FaBriefcase,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";

import useJob from "../../../store/jobcontext/JobContext";
import "./adminjoblist.css";
import RightBar from "../../../components/rightbar/RightBar";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const AdminJobList = () => {
  const { state, getAllJobs } = useJob();
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    getAllJobs();
  }, [isUpdate, isDelete]);

  console.log(state.jobs);
  const filteredJobs = state.jobs.filter((job) => {
    return (
      job.jobTitle?.toLowerCase().includes(search.toLowerCase()) &&
      (type === "" || job.jobType === type) &&
      (location === "" ||
        job.jobLocation?.toLowerCase().includes(location.toLowerCase())) &&
      (company === "" ||
        job.companyName?.toLowerCase().includes(company.toLowerCase()))
    );
  });

  const handleToggleIsFeatured = async (id) => {
    console.log(id);

    const res = await fetch(
      `${VITE_API_URL}/api/admin/job-update-isfeatured/${id}`,
      {
        method: "PUT", // ✅ correct place
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await res.json();

    if (data.success) {
      setIsUpdate(!isUpdate);
    }
  };
  const handleJobDelete = async (id) => {
    console.log(id);

    const res = await fetch(`${VITE_API_URL}/api/admin/job-delete/${id}`, {
      method: "DELETE", // ✅ correct place
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.success) {
      setIsDelete(!isDelete);
    }
  };

  return (
    <RightBar>
      <div className="container-fluid px-4 py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5 className="fw-semibold mb-1">
              <FaBriefcase className="me-2 text-success" />
              Job Management
            </h5>
            <p className="text-muted small mb-0">
              Manage all job postings in one place
            </p>
          </div>

          <NavLink to="/admin/add-post" className="btn btn-success btn-sm">
            <FaPlus className="me-1" />
            New Job
          </NavLink>
        </div>

        {/* Filters */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3 align-items-end">
              <div className="col-md-3">
                <label className="form-label small text-muted">Job Title</label>
                <input
                  className="form-control form-control-sm"
                  placeholder="Search job title"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="col-md-2">
                <label className="form-label small text-muted">Job Type</label>
                <select
                  className="form-select form-select-sm"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label small text-muted">Location</label>
                <input
                  className="form-control form-control-sm"
                  placeholder="City / Remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label small text-muted">Company</label>
                <input
                  className="form-control form-control-sm"
                  placeholder="Company name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="card border-0 shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light small text-muted">
                <tr>
                  <th>#</th>
                  <th>Job</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Salary</th>
                  <th>Experience</th>
                  <th>Deadline</th>
                  <th>Featured</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody className="small">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => (
                    <tr key={job._id}>
                      <td>{index + 1}</td>

                      <td>
                        <div className="fw-medium">{job.jobTitle}</div>
                        <div className="text-muted small">
                          <FaBuilding className="me-1" />
                          {job.companyName}
                        </div>
                      </td>

                      <td>{job.categoryName.categoryName || "-"}</td>

                      <td>
                        <span className="badge bg-light text-dark border">
                          {job.jobType}
                        </span>
                      </td>

                      <td className="text-muted">
                        <FaMapMarkerAlt className="me-1" />
                        {job.jobLocation}
                      </td>

                      <td>{job.salary || "-"}</td>
                      <td>{job.experience || "-"}</td>

                      <td>
                        {job.applicationDeadline
                          ? new Date(
                              job.applicationDeadline,
                            ).toLocaleDateString()
                          : "-"}
                      </td>
                      <td title="Toggle isFeatured">
                        {job.isFeatured ? (
                          <p className="bg-success text-white text-center border-3">
                            True
                          </p>
                        ) : (
                          <button
                            className="toggle-btn"
                            onClick={() => handleToggleIsFeatured(job._id)}
                          >
                            Toggle job
                          </button>
                        )}
                      </td>

                      <td className="text-center">
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleJobDelete(job._id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center text-muted py-5">
                      No jobs found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </RightBar>
  );
};

export default AdminJobList;
