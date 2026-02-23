import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";
import "./register.css";
import useAuth from "../../../store/authcontext/AuthContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleRegisterChange, handleRegisterSubmit, state } = useAuth();
  const formData = state.registerObj;

  return (
    <>
      <Navbar />
      <section className="register-section">
        <div className="register-left-container">
          <img src="login1.webp" alt="login-logo" className="w-100" style={{height:"544px"}} />
        </div>
        <div className="register-right-container">
          <div className="register-card">
          <div className="text-center register-header">
            <div className="icon-wrapper mb-3">
              <FaUserPlus />
            </div>
            <h4 className="fw-bold text-white">Create Your HireNest Account</h4>
            <p className="text-muted small">
              Join us and start your journey today.
            </p>
          </div>

         <div className="register-form-container">
           <form onSubmit={handleRegisterSubmit}>
            {/* Username */}
            <div className="mb-5">
              <label className="form-label">Username</label>
              <div className="input-group custom-input">
                <span className="input-group-text">
                  <FaUser />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  required
                  name="userName"
                  value={formData.userName}
                  onChange={handleRegisterChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <div className="input-group custom-input">
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
              <div className="input-group custom-input">
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
                  className="input-group-text password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-dark register-btn">
                Register
              </button>
            </div>

            <div className="text-center mt-4">
              <small className="text-muted">
                Already have an account?{" "}
                <NavLink to="/login" className="login-link">
                 <span className="text-primary"> Login here</span>
                </NavLink>
              </small>
            </div>
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
