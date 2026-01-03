import React, { useEffect, useState } from "react";
import LeftBar from "../../../components/leftbar/LeftBar";
import RighBar from "../../../components/rightbar/RighBar";
import { FaUser, FaBriefcase } from "react-icons/fa";

const SavedJobs = () => {
  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    // Simulated saved jobs
    setSavedList([
      {
        _id: "1",
        userName: "Ali Raza",
        jobTitle: "Frontend Developer",
        jobId: "job123",
      },
      {
        _id: "2",
        userName: "Maria Khan",
        jobTitle: "UI/UX Designer",
        jobId: "job456",
      },
    ]);
  }, []);

  return (
    <div className="d-flex">
      <LeftBar />
      <RighBar>
        <div className="container mt-4 px-3">
          <h4 className="fw-bold mb-4">Saved Jobs by Users</h4>
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr className="text-muted">
                  <th>#</th>
                  <th>User</th>
                  <th>Job Title</th>
                  <th>Job ID</th>
                </tr>
              </thead>
              <tbody>
                {savedList.map((item, i) => (
                  <tr key={item._id}>
                    <td>{i + 1}</td>
                    <td>
                      <FaUser className="me-2 text-secondary" />
                      {item.userName}
                    </td>
                    <td>
                      <FaBriefcase className="me-2 text-primary" />
                      {item.jobTitle}
                    </td>
                    <td>{item.jobId}</td>
                  </tr>
                ))}
                {savedList.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center text-muted">
                      No saved jobs found.
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

export default SavedJobs;
