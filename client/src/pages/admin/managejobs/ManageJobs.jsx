import React, { useEffect, useState } from "react";
import LeftBar from "../../../components/leftbar/LeftBar";
import RighBar from "../../../components/rightbar/RighBar";
import {
  FaPlus,
  FaTrash,
  FaBriefcase,
  FaMoneyBill,
  FaClock,
  FaUserGraduate,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useJob } from "../../../context/JobContext";

const ManageJobs = () => {
  const { handleJobDelete } = useJob();
  const [jobs, setJobs] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterCompany, setFilterCompany] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/job/all-jobs");
        const data = await res.json();
        setJobs(data.jobs); // API should return { jobs: [...] }
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      setJobs(jobs.filter((j) => j._id !== id));
      // Optional: Call backend to delete
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.title
      .toLowerCase()
      .includes(searchTitle.toLowerCase());
    const typeMatch = filterType === "" || job.type === filterType;
    const locationMatch =
      filterLocation === "" ||
      job.location.toLowerCase().includes(filterLocation.toLowerCase());
    const companyMatch =
      filterCompany === "" ||
      job.companyName.toLowerCase().includes(filterCompany.toLowerCase());
    return titleMatch && typeMatch && locationMatch && companyMatch;
  });

  return (
    <div className="d-flex">
      <LeftBar />
      <RighBar>
        <div className="container mt-4 px-3">
          <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
            <h4 className="fw-bold text-dark">
              <FaBriefcase className="me-2 text-success" /> Manage Job Posts
            </h4>
            <NavLink to="/admin/add-post">
              <button className="btn btn-success btn-sm px-3">
                <FaPlus className="me-2" /> Add New Job
              </button>
            </NavLink>
          </div>

          {/* Filters */}
          <div className="row g-3 mb-3">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Title"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="">Filter by Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Filter by Location"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Filter by Company"
                value={filterCompany}
                onChange={(e) => setFilterCompany(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-bordered align-middle shadow-sm">
              <thead className="table-light text-muted">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>
                    <FaMoneyBill className="me-1" /> Salary
                  </th>
                  <th>
                    <FaClock className="me-1" /> Experience
                  </th>
                  <th>
                    <FaUserGraduate className="me-1" /> Education
                  </th>
                  <th>Deadline</th>
                  <th>Tags</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job, i) => (
                  <tr key={job._id}>
                    <td>{i + 1}</td>
                    <td>{job.title}</td>
                    <td>{job.companyName}</td>
                    <td>
                      <span className="badge bg-info text-dark">
                        {job.type}
                      </span>
                    </td>
                    <td>{job.location}</td>
                    <td>{job.salary}</td>
                    <td>{job.experience}</td>
                    <td>{job.education}</td>
                    <td>
                      {job.deadline
                        ? new Date(job.deadline).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td>
                      {job.tags?.length > 0 ? job.tags.join(", ") : "No tags"}
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleJobDelete(job._id)}
                      >
                        <FaTrash className="me-1" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredJobs.length === 0 && (
                  <tr>
                    <td colSpan="11" className="text-center text-muted py-3">
                      🚫 No jobs match your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </RighBar>
    </div>
  );
};

export default ManageJobs;
