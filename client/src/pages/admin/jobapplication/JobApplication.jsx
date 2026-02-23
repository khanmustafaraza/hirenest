import React, { useEffect } from 'react';
import useJob from '../../../store/jobcontext/JobContext';
import LeftBar from '../../../components/leftbar/LeftBar';
import RighBar from '../../../components/rightbar/RighBar';

const JobApplication = () => {
  const { state, getAllJobs } = useJob();

  useEffect(() => {
    getAllJobs();
  }, []);
  const handleJobApplication =(id) =>{
    console.log(id)
  }

  return (
    <div className="d-flex bg-light min-vh-100">
      <LeftBar />

      <RighBar>
        <div className="container py-4">
          {state.jobs && state.jobs.length > 0 ? (
            <div className="row g-4">
              {state.jobs.map((job, index) => {
                const deadline = new Date(job.applicationDeadline);
                const isExpired = deadline < new Date();

                return (
                  <div key={index} className="col-12 col-md-6 col-lg-3">
                    <div
                      className="card h-100 shadow-sm p-3 border-0 rounded-3"
                      style={{ transition: 'transform 0.2s', cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h5 className="fw-bold">{job.jobTitle}</h5>
                          <p className="text-muted mb-1">{job.companyName}</p>
                          <p className="text-muted mb-0">{job.jobLocation}</p>
                        </div>
                        <span
                          className={`badge ${
                            isExpired ? 'bg-danger' : 'bg-success'
                          } fs-6`}
                        >
                          {isExpired
                            ? 'Expired'
                            : `Apply by ${deadline.toLocaleDateString()}`}
                        </span>
                      </div>

                      <p className="mb-2">
                        <strong>Type:</strong> {job.jobType} | <strong>Salary:</strong> {job.salary}
                      </p>

                      <div className="mb-2">
                        <strong>Skills:</strong> {job.skills.join(', ')}
                      </div>

                      <div className="mb-2">
                        <strong>Tags:</strong>{' '}
                        {job.tags.map((tag, i) => (
                          <span key={i} className="badge bg-info text-dark me-1">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <button
                        onClick={()=>{handleJobApplication(job._id)}}
                         
                          className="btn btn-outline-primary w-100"
                        >
                          View Applicants
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-muted">No jobs available</p>
          )}
        </div>
      </RighBar>
    </div>
  );
};

export default JobApplication;