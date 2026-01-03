import React from "react";
import "./FeaturedJobs.css";

const featuredJobs = [
  {
    title: "UI/UX Designer",
    company: "Microsoft",
    location: "Remote",
    salary: "₹18L – ₹25L",
    type: "Full-Time",
  },
  {
    title: "DevOps Engineer",
    company: "Netflix",
    location: "Mumbai, India",
    salary: "₹20L – ₹28L",
    type: "On-site",
  },
];

const FeaturedJobs = () => {
  return (
    <section className="featured-jobs-saas">
      <div className="container">
        <div className="section-header text-center">
          <h2>Featured Opportunities</h2>
          <p>Curated roles from companies hiring immediately</p>
        </div>

        <div className="row">
          {featuredJobs.map((job, i) => (
            <div key={i} className="col-md-6 mb-4">
              <div className="featured-job-saas">
                <div className="top-row">
                  <h5>{job.title}</h5>
                  <span className="pill">{job.type}</span>
                </div>

                <p className="company">{job.company}</p>

                <div className="meta">
                  <span>{job.location}</span>
                  <span>{job.salary}</span>
                </div>

                <button className="primary-btn">View role</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
