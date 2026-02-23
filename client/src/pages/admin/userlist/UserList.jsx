import React, { useEffect, useState } from "react";
import { FaBriefcase, FaPlus, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import RighBar from "../../../components/rightbar/RighBar";
import LeftBar from "../../../components/leftbar/LeftBar";
import useAuth from "../../../store/authcontext/AuthContext";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const { state } = useAuth();

  const getUserList = async () => {
    try {
      if (!state?.token) return;

      const res = await fetch(`${VITE_API_URL}/api/auth/admin/user-list`, {
        headers: {
          Authorization: `Bearer ${state?.token}`,
        },
      });
      const data = await res.json();

      // Uncomment this if you want to use mock data instead of API
      // const data = { data: [
      //   {
      //     _id: "6986d44871cd89c7c16137e2",
      //     userId: {
      //       _id: "698574b8b1a3353a098f949e",
      //       userName: "mustafa",
      //       email: "khanmustafarazaec1994@gmail.com",
      //     },
      //     profile_Pic: "WhatsApp Image 2025-08-19 at 12.16.57 AM.jpeg",
      //     fullName: "Joelle Dotson",
      //     phone: "+1 (143) 863-9408",
      //     dob: "2022-04-15",
      //     experience: "Quo incidunt harum",
      //     address: "Occaecat quod laudan",
      //     resume: "ACE Scanner_2026_02_03.pdf",
      //   },
      // ]};

      setUserList(data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div className="d-flex bg-light min-vh-100">
      <LeftBar />

      <RighBar>
        <div className="container-fluid px-4 py-4">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="fw-semibold mb-1">
                <FaBriefcase className="me-2 text-success" />
                User Management
              </h5>
              <p className="text-muted small mb-0">
                Manage all users in one place
              </p>
            </div>

            <NavLink to="/admin/add-user" className="btn btn-success btn-sm">
              <FaPlus className="me-1" />
              New User
            </NavLink>
          </div>

          {/* Table */}
          <div className="card border-0 shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light small text-muted">
                  <tr>
                    <th>#</th>
                    <th>Profile</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Date of Birth</th>
                    <th>Experience</th>
                    <th>Address</th>
                    <th>Resume</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="small">
                  {userList.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={`${VITE_API_URL}/api/user/uploads/${user.profile_Pic}`}
                          alt={user.fullName}
                          className="rounded-circle"
                          width="40"
                          height="40"
                        />
                      </td>
                      <td>{user.fullName}</td>
                      <td>{user.userId.email}</td>
                      <td>{user.phone}</td>
                      <td>{new Date(user.dob).toLocaleDateString()}</td>
                      <td>{user.experience}</td>
                      <td>{user.address}</td>
                      <td>
                        <a
                          href={`${VITE_API_URL}/api/user/uploads/${user.resume}`}
                          download={user.resume}
                          
                        >
                          Download Resume
                        </a>
                      </td>
                      <td className="text-center">
                        <button className="btn btn-sm btn-danger">
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {userList.length === 0 && (
                    <tr>
                      <td colSpan="10" className="text-center text-muted">
                        No users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </RighBar>
    </div>
  );
};

export default UserList;
