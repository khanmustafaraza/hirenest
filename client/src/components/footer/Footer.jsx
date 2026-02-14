import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top row gy-4">
          {/* Brand */}
          <div className="col-md-3">
            <h3 className="footer-brand">
              Hire<span>Nest</span>
            </h3>
            <p className="footer-text">
              Connecting ambitious talent with trusted companies worldwide.
            </p>

            <p className="footer-email">
              <FaEnvelope className="email-icon" />
              <a href="mailto:support@hirenest.com">support@hirenest.com</a>
            </p>
          </div>

          {/* Explore */}
          <div className="col-md-3">
            <h6 className="footer-heading">Explore</h6>
            <ul className="footer-links">
              <li>
                <a href="/jobs">Browse Jobs</a>
              </li>
              <li>
                <a href="/post-job">Post a Job</a>
              </li>
              <li>
                <a href="/companies">Companies</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-3">
            <h6 className="footer-heading">Legal</h6>
            <ul className="footer-links">
              <li>
                <NavLink to="/terms-conditions">Terms</NavLink>
              </li>
              <li>
            <NavLink to="/privacy-policy">Privacy</NavLink>
              </li>
              <li>
                <a href="/faq">FAQs</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h6 className="footer-heading">Stay Updated</h6>
            <p className="footer-text">
              Career tips & latest openings straight to your inbox.
            </p>

            <div className="newsletter-box">
              <input type="email" placeholder="Email address" />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
          <p>© 2025 HireNest. All rights reserved.</p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
