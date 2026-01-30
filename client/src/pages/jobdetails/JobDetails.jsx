import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaDollarSign, FaBookmark, FaTag } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./jobdetails.css";

const jobData = {
  categoryName: "IT & Development",
  jobTitle: "Aut ad laboris rerum",
  companyName: "Stein Alston Co",
  companyWebLink: "https://ballandprattplc.com",
  jobLocation: "Quidem soluta error",
  jobType: "Internship",
  salary: "Est officia incidunt",
  experience: "Eos qui velit temp",
  applicationDeadline: "1996-01-07T00:00:00.000+00:00",
  contactEmail: "cacaqoso@mailinator.com",
  responsibilities: [
    "Design, develop, and maintain software solutions",
    "Collaborate with cross-functional teams",
  ],
  requirements: [
    "Bachelor’s degree in Computer Science or related field",
    "Strong problem-solving skills",
  ],
  skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
  tags: ["Frontend", "Internship", "Remote", "High Priority"],
  jobDescription: [
    "This is an exciting opportunity to grow as a software developer in a professional environment.",
    "You will work on challenging projects with experienced engineers and receive mentorship to advance your career.",
  ],
};

const JobDetails = () => {
  const applyNow = () => alert("Apply Now clicked!");
  const saveJob = () => alert("Job Saved!");

  return (
    <>
      <Navbar />
      <div className="job-details-page">
        <div className="container">

          {/* Premium Two-Column Layout */}
          <div className="job-header">
            {/* Left card */}
            <div className="job-meta-card">
              <h1>{jobData.jobTitle}</h1>
              <p className="company-link">
                <a href={jobData.companyWebLink} target="_blank" rel="noreferrer">{jobData.companyName}</a>
              </p>
              <div className="job-meta">
                <span><FaTag /> {jobData.categoryName}</span>
                <span><FaMapMarkerAlt /> {jobData.jobLocation}</span>
                <span><FaBriefcase /> {jobData.jobType}</span>
                <span><FaDollarSign /> {jobData.salary}</span>
                <span>Experience: {jobData.experience}</span>
                <span><FaClock /> {new Date(jobData.applicationDeadline).toLocaleDateString()}</span>
              </div>
              <p className="contact-email">Contact: {jobData.contactEmail}</p>

              {/* Floating buttons */}
              <div className="job-actions">
                <button className="apply-btn" onClick={applyNow}>Apply Now</button>
                <button className="save-btn" onClick={saveJob}><FaBookmark /> Save</button>
              </div>
            </div>

            {/* Right: content */}
            <div className="job-content">
              <section>
                <h3>Job Description</h3>
                {jobData.jobDescription.map((desc, i) => <p key={i}>{desc}</p>)}
              </section>

              <section>
                <h3>Responsibilities</h3>
                <ul>
                  {jobData.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </section>

              <section>
                <h3>Requirements</h3>
                <ul>
                  {jobData.requirements.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </section>

              <section>
                <h3>Skills</h3>
                <ul className="skills-list">
                  {jobData.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
              </section>

              <section>
                <h3>Tags</h3>
                <div className="tags">
                  {jobData.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Floating bottom buttons for mobile */}
      <div className="mobile-action-bar">
        <button className="apply-btn" onClick={applyNow}>Apply Now</button>
        <button className="save-btn" onClick={saveJob}><FaBookmark /> Save</button>
      </div>

      <Footer />
    </>
  );
};

export default JobDetails;
