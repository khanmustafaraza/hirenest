import React from "react";
import "./hero.css";
import { NavLink } from "react-router-dom";
import heroBg from "../../assets/team.jpg"; // Replace with your background image path

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content text-center px-3">
          <span className="hero-badge">Trusted by 10,000+ Professionals</span>

          <h1 className="hero-title">
            Build Your <span>Future</span> <br /> With the Right Opportunity
          </h1>

          <p className="hero-subtitle">
            Discover verified jobs from top companies. Apply faster, track
            progress, and get hired with confidence.
          </p>

          <div className="hero-actions">
            <NavLink to="/jobs">
              <button className="hero-btn primary">Find Jobs</button>
            </NavLink>
            <NavLink to="/post-job">
              <button className="hero-btn secondary">Post a Job</button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="hero-divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity="0.25"
          />
          <path
            d="M0,0V15.81C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
