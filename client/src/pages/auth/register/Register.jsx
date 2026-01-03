import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCriticalRole,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";
import { useAuth } from "../../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleRegisterChange, handleRegisterSubmit, state } = useAuth();
  const formData = state.register;

  return (
    <>
      <Navbar />
      <section className="register-section py-5 mt-60">
        <div className="container">
          <div className="register-form-container">
            <h2 className="text-center mb-4">Create Account For HireNest</h2>

            <div className="">
              <form
                className="p-4 bg-white shadow-sm rounded"
                onSubmit={handleRegisterSubmit}
              >
                {/* user Name */}
                <div className="mb-3">
                  <label className="form-label">User Name</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter User Name... e.g. johndoe123@gmail.com"
                      required
                      name="username"
                      value={formData.username}
                      onChange={handleRegisterChange}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleRegisterChange}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaLock />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Create a password"
                      required
                      name="password"
                      value={formData.password}
                      onChange={handleRegisterChange}
                    />
                    <span
                      className="input-group-text eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
                {/* role */}
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaCriticalRole />
                    </span>

                    <select
                      name="role"
                      className="form-control"
                      onChange={handleRegisterChange}
                    >
                      <option value="">Role</option>
                      <option value="jobcreator">JobCreator</option>
                      <option value="jobseeker">JobSeeker</option>
                    </select>

                    {/* <input
                      type="checkbox"
                     
                      required
                      name="password"
                      value={formData.password}
                      onChange={handleRegisterChange}
                    />
                    <span
                      className="input-group-text eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span> */}
                  </div>
                </div>

                <button type="submit" className="register-btn">
                  Register
                </button>

                {/* Login Link */}
                <p className="mt-3 text-center">
                  Already have an account?{" "}
                  <NavLink to="/login" className="text-primary fw-semibold">
                    Login here
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
