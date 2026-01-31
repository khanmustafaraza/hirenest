import React from "react";
import UserLeftBar from "../../../components/userleftbar/UserLeftBar";
import UserRightBar from "../../../components/userrightbar/UserRightBar";
import "./userprofile.css";
import useUserContext from "../../../store/usercontext/UserContext";

const UserProfile = () => {
  const { state, handleProfileSubmit, handleProfileChange } = useUserContext();

  const { profileObj } = state;
  // console.log(profileObj)

  return (
    <div className="d-flex user-profile-container">
      <UserLeftBar />
      <UserRightBar>
        <div className="profile-card shadow-sm p-5 rounded bg-white">
          <h2 className="text-center mb-4">User Profile</h2>

          <form onSubmit={handleProfileSubmit} className="profile-form">
            {/* Profile Picture */}
            <div className="mb-4 text-center">
              <label className="form-label">Profile Picture</label>
              <input
                type="file"
                name="profile_Pic"
                onChange={handleProfileChange}
                accept="image/*"
                className="form-control mb-2"
              />

              {profileObj.profile_Pic && (
                <img
                  src={URL.createObjectURL(profileObj.profile_Pic)}
                  alt="Preview"
                  className="profile-preview mt-2"
                  width="120"
                />
              )}
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={profileObj.fullName}
                  onChange={handleProfileChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={profileObj.phone}
                  onChange={handleProfileChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={profileObj.dob}
                  onChange={handleProfileChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={profileObj.experience}
                  onChange={handleProfileChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                value={profileObj.address}
                onChange={handleProfileChange}
                className="form-control"
                rows="3"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Upload Resume</label>
              <input
                type="file"
                name="resume"
                onChange={handleProfileChange}
                accept=".pdf,.doc,.docx"
                className="form-control"
              />

              {profileObj.resume && (
                <small className="text-success">
                  Selected: {profileObj.resume.name}
                </small>
              )}
            </div>

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary btn-lg">
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </UserRightBar>
    </div>
  );
};

export default UserProfile;
