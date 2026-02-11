import React, { useEffect } from "react";
import {
  FiMapPin,
  FiBriefcase,
  FiDollarSign,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

import UserLeftBar from "../../../components/userleftbar/UserLeftBar";
import UserRightBar from "../../../components/userrightbar/UserRightBar";
import useAuth from "../../../store/authcontext/AuthContext";
import useUserContext from "../../../store/usercontext/UserContext";
import "./applyjoblist.css"

const ApplyJobList = () => {
  const {
    state: { token },
  } = useAuth();

  const { state, userAppliedJobList } = useUserContext();
  const { appliedJobs } = state;

  useEffect(() => {
    if (!token) return;
    userAppliedJobList();
  }, [token]);

  return (
    <div className="d-flex bg-light" style={{ minHeight: "100vh" }}>
      <UserLeftBar />

      <UserRightBar>
        <div className="container py-5">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 className="fw-bold mb-1">Applied Jobs</h3>
              <p className="text-muted mb-0">
                Track and manage your job applications
              </p>
            </div>

            <div className="badge bg-primary px-3 py-2">
              {appliedJobs.length} Applications
            </div>
          </div>

          {/* Empty State */}
          {appliedJobs.length === 0 ? (
            <div className="text-center py-5 bg-white rounded-4 shadow-sm">
              <h5 className="fw-semibold mb-2">No Applications Yet</h5>
              <p className="text-muted">
                You haven't applied to any jobs yet.
              </p>
            </div>
          ) : (
            <div className="row g-4">
              {appliedJobs.map((item) => (
                <div key={item._id} className="col-lg-6">
                  <div className="card border-0 shadow-sm h-100 p-4 rounded-4 job-card">

                    {/* Job Title */}
                    <h5 className="fw-bold mb-1">
                      {item.jobId?.jobTitle}
                    </h5>

                    {/* Company */}
                    <p className="text-muted mb-3">
                      {item.jobId?.companyName}
                    </p>

                    {/* Job Meta */}
                    <div className="d-flex flex-wrap gap-4 mb-3 text-muted small">

                      <div className="d-flex align-items-center gap-2">
                        <FiMapPin size={16} />
                        <span>{item.jobId?.jobLocation}</span>
                      </div>

                      <div className="d-flex align-items-center gap-2">
                        <FiBriefcase size={16} />
                        <span>{item.jobId?.jobType}</span>
                      </div>

                      <div className="d-flex align-items-center gap-2">
                        <FiDollarSign size={16} />
                        <span>{item.jobId?.salary}</span>
                      </div>

                    </div>

                    {/* Footer */}
                    <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">

                      <div className="d-flex align-items-center gap-2 text-muted small">
                        <FiCalendar size={16} />
                        <span>
                          Applied on{" "}
                          {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="d-flex align-items-center gap-2 text-success small fw-semibold">
                        <FiCheckCircle size={16} />
                        <span>Applied</span>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </UserRightBar>
    </div>
  );
};

export default ApplyJobList;
