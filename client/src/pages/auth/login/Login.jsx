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
      <section className="mt-60 login-section">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-4">
            <FaUserShield className="text-dark fs-1 mb-2" />
            <h4 className="fw-bold text-dark">Login For Your Account</h4>
            <p className="text-muted small">Welcome Back............</p>
          </div>

          {/* Login Form */}
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="p-4" onSubmit={handleLoginSubmit}>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <FaEnvelope className="me-2 text-muted" />
                    Email address
                  </label>
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

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    <FaLock className="me-2 text-muted" />
                    Password
                  </label>
                  <div className="input-group">
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
                      className="input-group-text"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-grid mt-3">
                  <button type="submit" className="btn btn-dark">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-4">
            <small className="text-muted">
              Don’t have an account?{" "}
              <Link to="/register" className="text-primary fw-semibold">
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
