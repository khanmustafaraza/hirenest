import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaUserShield,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./login.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import useAuth from "../../../store/authcontext/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { state, handleLoginChange, handleLoginSubmit } = useAuth();
  const formData = state.login;

  return (
    <>
      <Navbar />
      <section className="login-section d-flex align-items-center justify-content-center">
        <div className="login-card shadow-lg">
          <div className="text-center mb-4">
            <div className="icon-wrapper mb-3">
              <FaUserShield />
            </div>
            <h4 className="fw-bold">Login to Your Account</h4>
            <p className="text-muted small">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="input-group custom-input">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="user@example.com"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleLoginChange}
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group custom-input">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleLoginChange}
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
              <button type="submit" className="btn btn-dark login-btn">
                Login
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <small className="text-muted">
              Don’t have an account?{" "}
              <Link to="/register" className="register-link">
                Register here
              </Link>
            </small>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
