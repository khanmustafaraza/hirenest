import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useJob from "../../store/jobcontext/JobContext";
import "./joblist.css";

const JobList = () => {
  const { state, getAllJobs } = useJob();

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className="jobs-page">
      <Navbar />

      {/* HERO */}
      <section className="jobs-hero-minimal">
        <div className="container hero-minimal-container">
          <div className="hero-left">
            <h1>
              Find Your <span>Next Job</span>
            </h1>
            <p>
              Explore verified opportunities from top companies.
              Quick search, clean layout, easy apply.
            </p>
          </div>

          <div className="hero-right">
            <img
              src="https://www.transparentpng.com/thumb/jobs/jobs-images-png-26.png"
              alt="Jobs Illustration"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="jobs-filters-minimal">
        <div className="container filters-minimal-container">
          <input
            type="text"
            placeholder="Search jobs..."
            className="filter-input"
          />
          <select>
            <option>Category</option>
          </select>
          <select>
            <option>Location</option>
          </select>
          <select>
            <option>Experience</option>
          </select>
          <select>
            <option>Job Type</option>
          </select>
          <button className="filter-btn-minimal">Search</button>
        </div>
      </section>

      {/* JOB GRID */}
      <section className="jobs-grid-minimal container">
        {state.jobs.length > 0 ? (
          <div className="grid-minimal">
            {state.jobs.map((job) => (
              <div className="job-card-minimal" key={job._id}>
                <div className="card-top-minimal">
                  <div className="company-logo-minimal">
                    {job.companyName?.charAt(0)}
                  </div>

                  <div className="card-title-area">
                    <h5>{job.jobTitle}</h5>
                    <p>
                      {job.companyName} · {job.jobType}
                    </p>
                  </div>

                  <span className="status-minimal">
                    <FaClock /> Hiring
                  </span>
                </div>

                <div className="card-middle-minimal">
                  <FaMapMarkerAlt /> {job.jobLocation}
                </div>

                <div className="card-tags-minimal">
                  <span>
                    {job.categoryName?.categoryName || "General"}
                  </span>
                  {job.experience && <span>{job.experience}</span>}
                </div>

                <div className="card-bottom-minimal">
                  <NavLink to={`/job-details/${job._id}`}>
                    <button className="card-btn-minimal">
                      View Role →
                    </button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-minimal">
            <h3>No Jobs Available</h3>
            <p>Check back soon for new opportunities!</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default JobList;