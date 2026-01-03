import React from "react";
import { FaUsers, FaBriefcase, FaBookmark, FaFileAlt } from "react-icons/fa";
import LeftBar from "../../../components/leftbar/LeftBar";
import RighBar from "../../../components/rightbar/RighBar";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <LeftBar />
      <RighBar>
        <div className="container mt-4 px-3">
          <h4 className="fw-bold mb-4">Admin Dashboard</h4>
          <div className="row g-3">
            {/* Users */}
            <div className="col-md-3">
              <div className="p-3 border rounded shadow-sm d-flex align-items-center gap-3">
                <FaUsers className="fs-3 text-primary" />
                <div>
                  <div className="text-muted">Total Users</div>
                  <div className="fw-bold">120</div>
                </div>
              </div>
            </div>
            {/* Jobs */}
            <div className="col-md-3">
              <div className="p-3 border rounded shadow-sm d-flex align-items-center gap-3">
                <FaBriefcase className="fs-3 text-success" />
                <div>
                  <div className="text-muted">Jobs Posted</div>
                  <div className="fw-bold">35</div>
                </div>
              </div>
            </div>
            {/* Saved */}
            <div className="col-md-3">
              <div className="p-3 border rounded shadow-sm d-flex align-items-center gap-3">
                <FaBookmark className="fs-3 text-warning" />
                <div>
                  <div className="text-muted">Saved Jobs</div>
                  <div className="fw-bold">64</div>
                </div>
              </div>
            </div>
            {/* Applications */}
            <div className="col-md-3">
              <div className="p-3 border rounded shadow-sm d-flex align-items-center gap-3">
                <FaFileAlt className="fs-3 text-danger" />
                <div>
                  <div className="text-muted">Applications</div>
                  <div className="fw-bold">22</div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h5 className="fw-semibold mb-3">📌 Recent Activities</h5>
              <ul className="list-group shadow-sm">
                <li className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
                  <span>
                    New user <strong className="text-success">Ali Raza</strong>{" "}
                    registered
                  </span>
                  <span className="badge bg-primary-subtle text-primary rounded-pill">
                    2 mins ago
                  </span>
                </li>
                <li className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
                  <span>
                    Job posted: <strong>Senior React Developer</strong>
                  </span>
                  <span className="badge bg-secondary-subtle text-secondary rounded-pill">
                    10 mins ago
                  </span>
                </li>
                <li className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
                  <span>
                    <strong>Maria Khan</strong> saved a post
                  </span>
                  <span className="badge bg-warning-subtle text-dark rounded-pill">
                    30 mins ago
                  </span>
                </li>
                <li className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
                  <span>
                    Application received for <strong>UI/UX Designer</strong>
                  </span>
                  <span className="badge bg-info-subtle text-dark rounded-pill">
                    1 hour ago
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RighBar>
    </div>
  );
};

export default Dashboard;
