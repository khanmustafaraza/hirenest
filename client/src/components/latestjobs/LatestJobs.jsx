import React from "react";
import "./LatestJobs.css";

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
    title: "Backend Developer",
    company: "Amazon",
    location: "Hyderabad, India",
    type: "Part-Time",
  },
];

const LatestJobs = () => {
  return (
    <section className="latest-jobs-saas">
      <div className="container">
        <div className="section-header text-center">
          <h2>Latest Job Openings</h2>
          <p>Discover recently added roles across multiple locations</p>
        </div>

        <div className="row">
          {latestJobs.map((job, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="latest-job-card">
                <div className="job-header">
                  <h5>{job.title}</h5>
                  <span className="pill">{job.type}</span>
                </div>

                <p className="company">{job.company}</p>
                <p className="location">{job.location}</p>

                <button className="job-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
