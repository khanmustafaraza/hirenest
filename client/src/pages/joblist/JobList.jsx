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
      <section className="jobs-hero-new">
        <div className="container hero-container">
          <div className="hero-left">
            <span className="hero-badge">Trusted by 500+ Companies</span>
            <h1 className="hero-title">
              Explore Your <span>Dream Job</span><br />
              From Top Companies
            </h1>
            <p className="hero-subtitle">
              Discover exciting opportunities, filter by category, and apply with one click.
            </p>
            <NavLink to="/jobs">
              <button className="hero-btn">Browse Jobs</button>
            </NavLink>
          </div>
          <div className="hero-right">
            <img
              src="/assets/hero-illustration.png"
              alt="Jobs Illustration"
              className="hero-illustration"
            />
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="jobs-filters">
        <div className="container">
          <div className="filters-wrapper">
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

            <button className="filter-btn">Apply Filters</button>
          </div>
        </div>
      </section>

      {/* JOB GRID */}
      <section className="container jobs-grid-section">
        {state.jobs.length > 0 ? (
          <div className="row g-4">
            {state.jobs.map((job) => (
              <div className="col-md-6" key={job._id}>
                <div className="exclusive-job-card">
                  <div className="card-top">
                    <div>
                      <h5>{job.jobTitle}</h5>
                      <p>
                        {job.companyName} · {job.jobType}
                      </p>
                    </div>

                    <span className="status">
                      <FaClock /> Hiring
                    </span>
                  </div>

                  <div className="card-middle">
                    <span>
                      <FaMapMarkerAlt /> {job.jobLocation}
                    </span>
                  </div>

                  <div className="card-tags">
                    <span>{job.categoryName?.categoryName || "General"}</span>
                    {job.experience && <span>{job.experience}</span>}
                  </div>

                  <div className="card-bottom">
                    <NavLink to={`/job-details/${job._id}`}>
                      <button className="card-btn">View role →</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">No positions available</div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default JobList;
