import React from "react";
import "./about.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FiUsers, FiTrendingUp, FiShield, FiZap } from "react-icons/fi";

const About = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="about-hero">
        <div className="container text-center">
          <h1>
            HireNest: The Future of <span>Hiring</span>
          </h1>
          <p>
            Connecting ambitious professionals with innovative companies —
            fast, secure, and effortless.
          </p>
          <div className="hero-buttons">
            <a href="/register" className="primary-btn">
              Get Started
            </a>
            <a href="/job-list" className="secondary-btn">
              Browse Jobs
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="about-features">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Why HireNest?</h2>
            <p>Designed to make your hiring journey smooth, fast, and reliable.</p>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-3">
              <div className="feature-card">
                <FiUsers size={32} />
                <h5>Verified Employers</h5>
                <p>Every company is reviewed to ensure authenticity.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-card">
                <FiZap size={32} />
                <h5>One-Click Apply</h5>
                <p>Fast applications without unnecessary steps.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-card">
                <FiShield size={32} />
                <h5>Privacy First</h5>
                <p>Your data is secure and fully protected.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-card">
                <FiTrendingUp size={32} />
                <h5>Smart Matching</h5>
                <p>We connect you with opportunities that fit your profile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="container text-center">
          <h2>Our Mission</h2>
          <p>
            To eliminate friction from hiring and empower professionals to find
            work that aligns with their skills and ambitions.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="about-process">
        <div className="container">
          <div className="section-heading text-center">
            <h2>How It Works</h2>
          </div>
          <div className="row g-4 mt-4 text-center">
            {[
              "Create your profile",
              "Discover relevant jobs",
              "Apply in one click",
              "Track your progress",
            ].map((text, i) => (
              <div className="col-md-3" key={i}>
                <div className="step-box">
                  <span>{`0${i + 1}`}</span>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container text-center">
          <h2>Start your next chapter today</h2>
          <p>Join thousands discovering better career opportunities.</p>
          <a href="/register" className="primary-btn white">
            Start Your Journey
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
