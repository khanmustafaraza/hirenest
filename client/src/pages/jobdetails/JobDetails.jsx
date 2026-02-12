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

  const saveJob = () => alert("Job Saved!");

  if (!job || !job.jobTitle) {
    return (
      <>
        <Navbar />
        <div className="job-details-page">
          <div className="container text-center py-5">
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

      {/* Hero Banner */}
      <section className="job-hero-banner">
        <div className="container hero-inner">
          <h1>{job.jobTitle}</h1>
          <p className="company-name">
            <a href={job.companyWebLink} target="_blank" rel="noreferrer">
              {job.companyName}
            </a>
          </p>
          <div className="job-info-chips">
            {job.categoryName && <span><FaTag /> {job.categoryName}</span>}
            {job.jobLocation && <span><FaMapMarkerAlt /> {job.jobLocation}</span>}
            {job.jobType && <span><FaBriefcase /> {job.jobType}</span>}
            {job.salary && <span><FaDollarSign /> {job.salary}</span>}
            {job.experience && <span>Experience: {job.experience}</span>}
            {job.applicationDeadline && (
              <span><FaClock /> {new Date(job.applicationDeadline).toLocaleDateString()}</span>
            )}
          </div>
        </div>
      </section>

      <div className="container job-cards-layout">
        {/* Job Description */}
        {job.jobDescription?.length > 0 && (
          <section className="job-card">
            <h3>Job Description</h3>
            {job.jobDescription.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </section>
        )}

        {/* Responsibilities */}
        {job.responsibilities?.length > 0 && (
          <section className="job-card">
            <h3>Responsibilities</h3>
            <ul>
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Requirements */}
        {job.requirements?.length > 0 && (
          <section className="job-card">
            <h3>Requirements</h3>
            <ul>
              {job.requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Skills */}
        {job.skills?.length > 0 && (
          <section className="job-card">
            <h3>Skills</h3>
            <div className="skills-tags">
              {job.skills.map((skill, i) => (
                <span key={i} className="tag">{skill}</span>
              ))}
            </div>
          </section>
        )}

        {/* Tags */}
        {job.tags?.length > 0 && (
          <section className="job-card">
            <h3>Tags</h3>
            <div className="skills-tags">
              {job.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </section>
        )}

        {/* Contact & Actions */}
        <section className="job-card job-action-card">
          {job.contactEmail && (
            <p>Contact: <a href={`mailto:${job.contactEmail}`}>{job.contactEmail}</a></p>
          )}
          <div className="actions-buttons">
            <button className="apply-btn" onClick={() => userAppliedJobApplication(job._id)}>
              Apply Now
            </button>
            <button className="save-btn" onClick={saveJob}>
              <FaBookmark /> Save
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default JobDetails;
