import React from "react";
import "./latestjobs.css";

const latestJobs = [
  {
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore, India",
    type: "Full-Time",
  },
  {
    title: "Backend Developer",
    company: "Amazon",
    location: "Hyderabad, India",
    type: "Part-Time",
  },
  {
    title: "UI/UX Designer",
    company: "Microsoft",
    location: "Mumbai, India",
    type: "Contract",
  },
];

const LatestJobs = () => {
  return (
    <section className="latest-jobs-premium">
      <div className="container">
        <div className="section-header-latest text-center mb-5">
          <h2>Latest Job Openings</h2>
          <p>Discover recently added roles across multiple locations</p>
        </div>

        <div className="row g-4">
          {latestJobs.map((job, i) => (
            <div key={i} className="col-md-4">
              <div className="latest-job-card-premium">
                <div className="job-header-premium">
                  <h5>{job.title}</h5>
                  <span className="pill-premium">{job.type}</span>
                </div>

                <p className="company-premium">{job.company}</p>
                <p className="location-premium">{job.location}</p>

                <button className="job-btn-premium">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
