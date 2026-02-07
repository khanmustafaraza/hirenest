import React, { useEffect } from "react";
import useUserContext from "../../../store/usercontext/UserContext";
import useAuth from "../../../store/authcontext/AuthContext";
import UserLeftBar from "../../../components/userleftbar/UserLeftBar";
import UserRightBar from "../../../components/userrightbar/UserRightBar";

const UserProfileById = () => {
  const { getUserProfileById, state: userState } = useUserContext();
  const { state: authState } = useAuth();

  const profile = userState.userProfile;

  useEffect(() => {
    if (!authState?.token) return;
    getUserProfileById();
  }, [authState?.token]);

  if (!profile) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <p style={{ fontSize: "16px", color: "#666" }}>Loading profile…</p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f7fb" }}>
      <UserLeftBar />

      <UserRightBar>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "30px" }}>
          {/* Header */}
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "600" }}>
              User Profile
            </h2>
            <p style={{ color: "#777", marginTop: "6px" }}>
              Manage and view user information
            </p>
          </div>

          {/* Profile Card */}
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              padding: "30px",
              display: "grid",
              gridTemplateColumns: "220px 1fr",
              gap: "30px",
            }}
          >
            {/* Left: Avatar */}
            <div style={{ textAlign: "center" }}>
              <img
                src={`${import.meta.env.VITE_API_URL}/api/user/uploads/${profile.profile_Pic}`}
                alt="Profile"
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #f0f0f0",
                }}
              />

              <h3 style={{ marginTop: "16px", marginBottom: "4px" }}>
                {profile.fullName}
              </h3>
              <p style={{ color: "#888", fontSize: "14px" }}>
                {profile.experience} Experience
              </p>
            </div>

            {/* Right: Details */}
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <Info label="Phone" value={profile.phone} />
                <Info
                  label="Date of Birth"
                  value={new Date(profile.dob).toLocaleDateString()}
                />
                <Info label="Address" value={profile.address} />
                <Info label="Experience" value={profile.experience} />
              </div>

              {/* Resume */}
              <div
                style={{
                  marginTop: "30px",
                  paddingTop: "20px",
                  borderTop: "1px solid #eee",
                }}
              >
                <a
                  href={`${import.meta.env.VITE_API_URL}/api/user/uploads/${profile.resume}`}
                  download
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    background: "#4f46e5",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </UserRightBar>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p style={{ margin: 0, fontSize: "13px", color: "#888" }}>{label}</p>
    <p style={{ margin: "4px 0 0", fontSize: "15px", fontWeight: "500" }}>
      {value || "-"}
    </p>
  </div>
);

export default UserProfileById;
