import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaDollarSign,
  FaBookmark,
  FaTag,
} from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./jobdetails.css";
import useJob from "../../store/jobcontext/JobContext";
import useUserContext from "../../store/usercontext/UserContext";

const JobDetails = () => {
  const { id } = useParams();
  const { getJobDetails, state } = useJob();
 const {userAppliedJobApplication}  = useUserContext()
  const job = state?.jobDetailObj;

  useEffect(() => {
    if (id) getJobDetails(id);
  }, [id]);

  const applyNow = () => alert("Apply Now clicked!");
  const saveJob = () => alert("Job Saved!");

  if (!job || !job.jobTitle) {
    return (
      <>
        <Navbar />
        <div className="job-details-page">
          <div className="container">
            <p className="loading-text">Loading job details…</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="job-details-page">
        <div className="container job-details-container">
          {/* Left Panel */}
          <aside className="job-meta-card">
            <h1 className="job-title">{job.jobTitle}</h1>
            <a
              href={job.companyWebLink}
              target="_blank"
              rel="noreferrer"
              className="company-link"
            >
              {job.companyName}
            </a>
            <div className="job-meta">
              {job.categoryName && <span><FaTag /> {job.categoryName}</span>}
              {job.jobLocation && <span><FaMapMarkerAlt /> {job.jobLocation}</span>}
              {job.jobType && <span><FaBriefcase /> {job.jobType}</span>}
              {job.salary && <span><FaDollarSign /> {job.salary}</span>}
              {job.experience && <span>Experience: {job.experience}</span>}
              {job.applicationDeadline && (
                <span><FaClock /> {new Date(job.applicationDeadline).toLocaleDateString()}</span>
              )}
            </div>
            {job.contactEmail && <p className="contact-email">Contact: {job.contactEmail}</p>}

            <div className="job-actions">
              <button className="apply-btn" onClick={() => userAppliedJobApplication(job._id)}>Apply Now</button>
              <button className="save-btn" onClick={saveJob}><FaBookmark /> Save</button>
            </div>
          </aside>

          {/* Right Content */}
          <main className="job-content">
            {job.jobDescription?.length > 0 && (
              <section className="job-section">
                <h3>Job Description</h3>
                {job.jobDescription.map((desc, i) => <p key={i}>{desc}</p>)}
              </section>
            )}

            {job.responsibilities?.length > 0 && (
              <section className="job-section">
                <h3>Responsibilities</h3>
                <ul>
                  {job.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </section>
            )}

            {job.requirements?.length > 0 && (
              <section className="job-section">
                <h3>Requirements</h3>
                <ul>
                  {job.requirements.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </section>
            )}

            {job.skills?.length > 0 && (
              <section className="job-section">
                <h3>Skills</h3>
                <ul className="skills-list">
                  {job.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
              </section>
            )}

            {job.tags?.length > 0 && (
              <section className="job-section">
                <h3>Tags</h3>
                <div className="tags">
                  {job.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Action Bar */}
      <div className="mobile-action-bar">
        <button className="apply-btn" onClick={() => userAppliedJobApplication(job._id)}>Apply Now</button>
        <button className="save-btn" onClick={saveJob}><FaBookmark /> Save</button>
      </div>

      <Footer />
    </>
  );
};

export default JobDetails;
