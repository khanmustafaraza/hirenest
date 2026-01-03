import React from "react";
import "./about.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="about-hero mt-60">
        <div className="container text-center">
          <h1>
            About <span>JobFinder</span>
          </h1>
          <p>
            JobFinder is a modern hiring platform helping professionals connect
            with trusted companies and meaningful opportunities.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <h3>Why JobFinder?</h3>
              <p className="muted">
                We focus on simplicity, transparency, and speed — making job
                discovery effortless for candidates and hiring teams.
              </p>

              <ul className="about-list">
                <li>Verified companies & real jobs</li>
                <li>Fast applications, no clutter</li>
                <li>Built for modern professionals</li>
                <li>Privacy-first approach</li>
              </ul>
            </div>

            <div className="col-md-6">
              <img src="/team.jpg" alt="Team" className="about-image" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <h5>Mission</h5>
              <p>
                Enable professionals to find work that aligns with their skills
                and ambitions.
              </p>
            </div>

            <div className="col-md-4">
              <h5>Trust</h5>
              <p>
                Every company and listing is reviewed to ensure authenticity.
              </p>
            </div>

            <div className="col-md-4">
              <h5>Focus</h5>
              <p>
                No distractions. Just meaningful jobs and clear hiring signals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="about-steps">
        <div className="container text-center">
          <h3>How It Works</h3>

          <div className="row g-4 mt-4">
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
          <h3>Start your next chapter</h3>
          <p>Join professionals discovering better career opportunities.</p>
          <a href="/register" className="cta-btn">
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
