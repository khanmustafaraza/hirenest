import React, { useEffect, useState } from "react";
import LeftBar from "../../../components/leftbar/LeftBar";
import RighBar from "../../../components/rightbar/RighBar";
import {
  FaBriefcase,
  FaMoneyBill,
  FaClock,
  FaUserGraduate,
  FaRegRegistered,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const RegisterList = () => {
  return (
    <div className="d-flex">
      <LeftBar />
      <RighBar>
        <div className="container mt-4 px-3">
          <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
            <h4 className="fw-bold text-dark">
              <FaRegRegistered className="me-2 text-success" /> Manage Job Posts
            </h4>
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
              <tbody></tbody>
            </table>
          </div>
        </div>
      </RighBar>
    </div>
  );
};

export default RegisterList;
