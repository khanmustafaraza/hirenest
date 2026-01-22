import React from "react";
import { FaUsers, FaBriefcase, FaBookmark, FaFileAlt } from "react-icons/fa";

import LeftBar from "../../../components/leftbar/LeftBar";
import RighBar from "../../../components/rightbar/RighBar";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <LeftBar />

      <RighBar>
        <div className="container-fluid px-4 py-4">
          {/* Page Title */}
          <div className="mb-4">
            <h5 className="fw-semibold text-dark">Dashboard Overview</h5>
            <small className="text-muted">
              Admin summary & recent activity
            </small>
          </div>

          {/* Stats */}
          <div className="row g-4">
            <StatCard
              icon={<FaUsers />}
              title="Total Users"
              value="120"
              color="text-primary"
            />
            <StatCard
              icon={<FaBriefcase />}
              title="Jobs Posted"
              value="35"
              color="text-info"
            />
            <StatCard
              icon={<FaBookmark />}
              title="Saved Jobs"
              value="64"
              color="text-warning"
            />
            <StatCard
              icon={<FaFileAlt />}
              title="Applications"
              value="22"
              color="text-danger"
            />
          </div>

          {/* Activity */}
          <div className="mt-5">
            <h6 className="fw-semibold mb-3">Recent Activity</h6>

            <div className="card shadow-sm border-0">
              <ul className="list-group list-group-flush small">
                <Activity
                  text={
                    <>
                      New user{" "}
                      <strong className="text-primary">Ali Raza</strong>{" "}
                      registered
                    </>
                  }
                  time="2 mins ago"
                />
                <Activity
                  text={
                    <>
                      Job posted: <strong>Senior React Developer</strong>
                    </>
                  }
                  time="10 mins ago"
                />
                <Activity
                  text={
                    <>
                      <strong className="text-warning">Maria Khan</strong> saved
                      a job
                    </>
                  }
                  time="30 mins ago"
                />
                <Activity
                  text={
                    <>
                      Application received for <strong>UI/UX Designer</strong>
                    </>
                  }
                  time="1 hour ago"
                />
              </ul>
            </div>
          </div>
        </div>
      </RighBar>
    </div>
  );
};

export default Dashboard;

/* ---------------- Reusable Components ---------------- */

const StatCard = ({ icon, title, value, color }) => (
  <div className="col-md-3 col-sm-6">
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body d-flex align-items-center gap-3">
        <div className={`${color} fs-4`}>{icon}</div>
        <div>
          <div className="text-muted small">{title}</div>
          <div className="fw-semibold fs-5 text-dark">{value}</div>
        </div>
      </div>
    </div>
  </div>
);

const Activity = ({ text, time }) => (
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <span>{text}</span>
    <span className="text-muted small">{time}</span>
  </li>
);
