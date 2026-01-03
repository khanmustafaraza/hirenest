import React from "react";
import "./userdashboard.css";

const UserDashboard = () => {
  const stats = {
    savedJobs: 5,
    appliedJobs: 3,
    profileComplete: true,
  };

  return (
    <section className="dashboard-section py-5">
      <div className="container">
        <h2 className="mb-4 text-center">📊 Dashboard</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow-sm">
              <h5>⭐ Saved Jobs</h5>
              <p>{stats.savedJobs}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow-sm">
              <h5>📤 Applied Jobs</h5>
              <p>{stats.appliedJobs}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow-sm">
              <h5>✅ Profile Status</h5>
              <p>{stats.profileComplete ? "Complete" : "Incomplete"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
