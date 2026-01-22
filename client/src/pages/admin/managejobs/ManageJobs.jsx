import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlus, FaTrash, FaBriefcase } from "react-icons/fa";

import LeftBar from "../../../components/leftbar/LeftBar";
import RighBar from "../../../components/rightbar/RighBar";
import useJob from "../../../store/jobcontext/JobContext";

const ManageJobs = () => {
  const { handleJobDelete } = useJob();

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/job/all-jobs");
        const data = await res.json();
        setJobs(data.jobs || []);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (type === "" || job.type === type) &&
      (location === "" ||
        job.location.toLowerCase().includes(location.toLowerCase())) &&
      (company === "" ||
        job.companyName.toLowerCase().includes(company.toLowerCase()))
    );
  });

  return (
    <div className="d-flex">
      <LeftBar />

      <RighBar>
        <div className="container-fluid px-4 py-4">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-semibold text-dark">
              <FaBriefcase className="me-2 text-success" />
              Job Management
            </h5>

            <NavLink to="/admin/add-post" className="btn btn-success btn-sm">
              <FaPlus className="me-1" />
              New Job
            </NavLink>
          </div>

          {/* Filters */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-3">
                  <input
                    className="form-control form-control-sm"
                    placeholder="Search title"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <div className="col-md-3">
                  <select
                    className="form-select form-select-sm"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="">All types</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <input
                    className="form-control form-control-sm"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div className="col-md-3">
                  <input
                    className="form-control form-control-sm"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="card shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light small text-muted">
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Salary</th>
                    <th>Experience</th>
                    <th>Deadline</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody className="small">
                  {filteredJobs.map((job, index) => (
                    <tr key={job._id}>
                      <td>{index + 1}</td>
                      <td className="fw-medium">{job.title}</td>
                      <td>{job.companyName}</td>
                      <td>
                        <span className="badge bg-light text-dark border">
                          {job.type}
                        </span>
                      </td>
                      <td>{job.location}</td>
                      <td>{job.salary || "-"}</td>
                      <td>{job.experience || "-"}</td>
                      <td>
                        {job.deadline
                          ? new Date(job.deadline).toLocaleDateString()
                          : "-"}
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
                  ))}

                  {filteredJobs.length === 0 && (
                    <tr>
                      <td colSpan="9" className="text-center text-muted py-4">
                        No jobs found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </RighBar>
    </div>
  );
};

export default ManageJobs;
