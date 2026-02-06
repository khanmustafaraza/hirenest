import React, { useEffect } from "react";
import useUserContext from "../../../store/usercontext/UserContext";
import useAuth from "../../../store/authcontext/AuthContext";

const UserProfileById = () => {
  const { getUserProfileById, state: userState } = useUserContext();
  const { state: authState } = useAuth();

  const profile = userState.userProfile;

  useEffect(() => {
    if (!authState?.token) return;
    getUserProfileById();
  }, [authState?.token]);

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile</h2>

      {/* Profile Image */}
     <img
  src={`${import.meta.env.VITE_API_URL}/api/user/uploads/${profile.profile_Pic}`}
  alt="Profile"
  width="150"
/>


      <p><strong>Name:</strong> {profile.fullName}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>DOB:</strong> {new Date(profile.dob).toLocaleDateString()}</p>
      <p><strong>Experience:</strong> {profile.experience}</p>
      <p><strong>Address:</strong> {profile.address}</p>

      {/* Resume Download */}
      <a
        href={`${import.meta.env.VITE_API_URL}/api/user/uploads/${profile.resume}`}
        download
      >
        Download Resume
      </a>
    </div>
  );
};

export default UserProfileById;
