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
    <section className="featured-jobs-premium">
      <div className="container">
        <div className="section-header-premium text-center mb-5">
          <h2>Featured Opportunities</h2>
          <p>Curated roles from companies hiring immediately</p>
        </div>

        <div className="row g-4">
          {featuredJobs.map((job, i) => (
            <div key={i} className="col-md-6">
              <div className="featured-job-card-premium">
                <div className="top-row-premium">
                  <h5>{job.title}</h5>
                  <span className="pill-premium">{job.type}</span>
                </div>

                <p className="company-premium">{job.company}</p>

                <div className="meta-premium">
                  <span>{job.location}</span>
                  <span>{job.salary}</span>
                </div>

                <button className="primary-btn-premium">View Role</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
