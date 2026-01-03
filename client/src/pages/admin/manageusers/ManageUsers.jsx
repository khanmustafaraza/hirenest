import React, { useEffect, useState } from "react";
import LeftBar from "../../../components/leftbar/LeftBar";
import RighBar from "../../../components/rightbar/RighBar";
import { FaTrash } from "react-icons/fa";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  // Example fetch function (replace with real API)
  useEffect(() => {
    // Simulated data
    setUsers([
      {
        _id: "u1",
        name: "Ali Raza",
        email: "ali@example.com",
        role: "jobseeker",
        education: "B.Tech",
      },
      {
        _id: "u2",
        name: "Maria Khan",
        email: "maria@example.com",
        role: "jobseeker",
        education: "MBA",
      },
    ]);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u._id !== id));
      // 🔁 Replace with: await axios.delete(`/api/users/${id}`)
    }
  };

  return (
    <div className="d-flex">
      <LeftBar />
      <RighBar>
        <div className="container mt-4 px-3">
          <h4 className="fw-bold mb-4">Manage Users</h4>
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr className="text-muted">
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Education</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={user._id}>
                    <td>{i + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.education || "N/A"}</td>
                    <td>
                      <span className="badge bg-secondary">{user.role}</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(user._id)}
                      >
                        <FaTrash className="me-1" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center text-muted">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </RighBar>
    </div>
  );
};

export default ManageUsers;
