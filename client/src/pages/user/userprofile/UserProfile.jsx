import React, { useState } from 'react';
import UserLeftBar from '../../../components/userleftbar/UserLeftBar';
import UserRightBar from '../../../components/userrightbar/UserRightBar';
import './userprofile.css'; // Custom CSS

const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dob: '',
    address: '',
    linkedin: '',
    resume: null,
    profilePicture: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume' || name === 'profilePicture') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.dob ||
      !formData.address ||
      !formData.linkedin ||
      !formData.resume
    ) {
      alert('Please fill in all required fields and upload your resume.');
      return;
    }

    console.log('Form Data:', formData);
    alert('Profile submitted successfully!');
  };

  return (
    <div className="d-flex user-profile-container">
      <UserLeftBar />
      <UserRightBar>
        <div className="profile-card shadow-sm p-5 rounded bg-white">
          <h2 className="text-center mb-4">User Profile</h2>
          <form onSubmit={handleSubmit} className="profile-form">

            {/* Profile Picture */}
            <div className="mb-4 text-center">
              <label className="form-label">Profile Picture</label>
              <input
                type="file"
                name="profilePicture"
                onChange={handleChange}
                accept="image/*"
                className="form-control mb-2"
              />
              {formData.profilePicture && (
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Profile Preview"
                  className="profile-preview mt-2"
                />
              )}
            </div>

            {/* Two-column fields */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter LinkedIn URL"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your full address"
                rows="3"
                required
              />
            </div>

            {/* Resume Upload */}
            <div className="mb-3">
              <label className="form-label">Upload Resume (PDF/DOCX)</label>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
                className="form-control"
                required
              />
              {formData.resume && (
                <small className="text-success mt-1 d-block">
                  Selected file: {formData.resume.name}
                </small>
              )}
            </div>

            {/* Submit Button */}
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
