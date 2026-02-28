import React, { useEffect, useState } from "react";
import { FaBriefcase, FaUser, FaDownload, FaFileAlt } from "react-icons/fa";
import RightBar from "../../../components/rightbar/RightBar";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Simulated application data
    setApplications([
      {
        _id: "app1",
        userName: "Ali Raza",
        jobTitle: "React Developer",
        resumeUrl: "/resumes/ali_raza.pdf",
      },
      {
        _id: "app2",
        userName: "Maria Khan",
        jobTitle: "UI/UX Designer",
        resumeUrl: "/resumes/maria_khan.pdf",
      },
    ]);
  }, []);

  return (
    <RightBar>
      <div className="container mt-4 px-3">
        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
          <h4 className="fw-bold text-dark">
            <FaFileAlt className="me-2 text-success" /> Job Applications
          </h4>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered align-middle shadow-sm">
            <thead className="table-light text-muted">
              <tr>
                <th>#</th>
                <th>Candidate</th>
                <th>Job Title</th>
                <th className="text-center">Resume</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, i) => (
                <tr key={app._id}>
                  <td className="fw-semibold">{i + 1}</td>
                  <td className="text-dark">
                    <FaUser className="me-2 text-secondary" />
                    {app.userName}
                  </td>
                  <td className="text-dark">
                    <FaBriefcase className="me-2 text-primary" />
                    {app.jobTitle}
                  </td>
                  <td className="text-center">
                    <a
                      href={app.resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-success px-3"
                    >
                      <FaDownload className="me-1" /> Download
                    </a>
                  </td>
                </tr>
              ))}
              {applications.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-3">
                    🚫 No applications received yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </RightBar>
  );
};

export default Applications;
