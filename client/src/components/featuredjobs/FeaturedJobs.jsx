import React, { useEffect } from "react";
import "./featuredjobs.css";
import useJob from "../../store/jobcontext/JobContext";
import { NavLink } from "react-router-dom";

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
  const { state, getAllJobs } = useJob();
  console.log(state.jobs);
  useEffect(() => {
    getAllJobs();
  }, []);
  return (
    <section className="featured-jobs-premium">
      <div className="container">
        <div className="section-header-premium text-center mb-5">
          <h2>Featured Opportunities</h2>
          <p>Curated roles from companies hiring immediately</p>
        </div>

        <div className="row g-4">
          {state?.jobs
            ?.filter((job) => job.isFeatured) // this is correct
            .map((job) => (
             <NavLink to ={`/job-details/${job._id}`} className="col-md-6">
               <div key={job._id} >
                <div className="featured-job-card-premium">
                  <div className="top-row-premium">
                    <h5>{job.jobTitle}</h5>
                    <span className="pill-premium">{job.jobType}</span>
                  </div>

                  <p className="company-premium">{job.companyName}</p>

                  <div className="meta-premium">
                    <span>{job.jobLocation}</span>
                    <span>{job.salary}</span>
                  </div>

                  <button className="primary-btn-premium">View Role</button>
                </div>
              </div>
             </NavLink>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
