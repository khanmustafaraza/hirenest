import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaDollarSign,
  FaBookmark,
} from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useJob from "../../store/jobcontext/JobContext";
import useUserContext from "../../store/usercontext/UserContext";
import "./jobdetails.css";

const JobDetails = () => {
  const { id } = useParams();
  const { getJobDetails, state } = useJob();
  const { userAppliedJobApplication } = useUserContext();
  const job = state?.jobDetailObj;

  useEffect(() => {
    if (id) getJobDetails(id);
  }, [id]);

  if (!job || !job.jobTitle) {
    return (
      <>
        <Navbar />
        <div className="loading-wrapper">
          <p>Loading job details...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="job-wrapper">

        {/* HEADER */}
        <div className="job-header">
          <h1 className="job-title">{job.jobTitle}</h1>

          <p className="company-name">
            <a href={job.companyWebLink} target="_blank" rel="noreferrer">
              {job.companyName}
            </a>
          </p>

          <div className="job-meta">
            {job.jobLocation && (
              <span><FaMapMarkerAlt /> {job.jobLocation}</span>
            )}
            {job.jobType && (
              <span><FaBriefcase /> {job.jobType}</span>
            )}
            {job.salary && (
              <span><FaDollarSign /> {job.salary}</span>
            )}
            {job.applicationDeadline && (
              <span>
                <FaClock />{" "}
                {new Date(job.applicationDeadline).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>

        {/* BODY */}
        <div className="job-body">

          {/* LEFT CONTENT */}
          <div className="job-content">

            {job.jobDescription?.length > 0 && (
              <section>
                <h3>About the Role</h3>
                {job.jobDescription.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </section>
            )}

            {job.responsibilities?.length > 0 && (
              <section>
                <h3>Responsibilities</h3>
                <ul>
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {job.requirements?.length > 0 && (
              <section>
                <h3>Requirements</h3>
                <ul>
                  {job.requirements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

          </div>

          {/* RIGHT SIDE PANEL */}
          <div className="job-sidebar">

            <button
              className="apply-btn"
              onClick={() => userAppliedJobApplication(job._id)}
            >
              Apply Now
            </button>

           

            {job.contactEmail && (
              <p className="contact-email">
                Contact:
                <a href={`mailto:${job.contactEmail}`}>
                  {job.contactEmail}
                </a>
              </p>
            )}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default JobDetails;