import React from "react";
import "./useraccount.css";

const UserAccount = () => {
  const user = {
    name: "Mustafa Raza Khan",
    email: "mustafa@example.com",
    resume: "resume.pdf",
    phone: "+91 9876543210",
    skills: ["React", "Node.js", "MongoDB"],
  };

  return (
    <section className="user-account-section py-5">
      <div className="container">
        <h2 className="mb-4 text-center">👤 Your Profile</h2>
        <div className="card p-4 shadow-sm">
          <h4>{user.name}</h4>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>
            Resume:{" "}
            <a href={`/${user.resume}`} download>
              Download
            </a>
          </p>
          <p>Skills: {user.skills.join(", ")}</p>
        </div>
      </div>
    </section>
  );
};

export default UserAccount;
