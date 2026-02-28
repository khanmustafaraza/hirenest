import React from "react";
import { FaBriefcase, FaPlus, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import RightBar from "../../../components/rightbar/RightBar";

const UserRegisterList = () => {
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
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody className="small"></tbody>
            </table>
          </div>
        </div>
      </div>
    </RightBar>
  );
};

export default UserRegisterList;
