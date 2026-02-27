import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LeftBar from '../../../components/leftbar/LeftBar'
import RightBar from '../../../components/rightbar/RighBar'

const VITE_API_URL = import.meta.env.VITE_API_URL

const JobApplicationList = () => {
  const { id } = useParams()

  const [applications, setApplications] = useState([])
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)

  const getJobApplicationList = async (id) => {
    try {
      const res = await fetch(`${VITE_API_URL}/api/admin/job-application/${id}`)
      const data = await res.json()

      if (data.success) {
        setApplications(data.applications)
        setJob(data.job)
      }
    } catch (error) {
      console.error("Error fetching applications:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      getJobApplicationList(id)
    }
  }, [id])

  return (
    <div className="d-flex bg-light min-vh-100">
      <LeftBar />

      <RightBar>
        <div className="container-fluid mt-4">

          <div className="card shadow border-0">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h4 className="mb-0">
                {job?.title} Applications
              </h4>
              <span className="badge bg-primary fs-6">
                {applications.length} Applicants
              </span>
            </div>

            <div className="card-body">

              {loading ? (
                <div className="text-center py-4">
                  <div className="spinner-border text-primary" />
                </div>
              ) : applications.length === 0 ? (
                <div className="text-center text-muted py-4">
                  No applications found
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table align-middle table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>#</th>
                        <th>Profile</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>DOB</th>
                        <th>Experience</th>
                        <th>Address</th>
                        <th>Resume</th>
                        <th>Applied</th>
                      </tr>
                    </thead>

                    <tbody>
                      {applications.map((app, index) => (
                        <tr key={app._id}>
                          <td className="fw-bold">{index + 1}</td>

                          {/* Profile */}
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={`${VITE_API_URL}/api/user/uploads/${app.profileId?.profile_Pic}`}
                                alt="profile"
                                width="45"
                                height="45"
                                className="rounded-circle me-2"
                                style={{ objectFit: "cover" }}
                              />
                              <div>
                                <div className="fw-semibold">
                                  {app.profileId?.fullName}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td>{app.userId?.userName}</td>
                          <td>{app.userId?.email}</td>
                          <td>{app.profileId?.phone}</td>

                          <td>
                            {new Date(app.profileId?.dob).toLocaleDateString()}
                          </td>

                          <td>
                            <span className="badge bg-success">
                              {app.profileId?.experience} yrs
                            </span>
                          </td>

                          <td>{app.profileId?.address}</td>

                          <td>
                            <a
                              href={`${VITE_API_URL}/api/user/uploads/${app.profileId?.resume}`}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-sm btn-outline-primary"
                            >
                              View
                            </a>
                          </td>

                          <td>
                            {new Date(app.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>

                  </table>
                </div>
              )}

            </div>
          </div>

        </div>
      </RightBar>
    </div>
  )
}

export default JobApplicationList