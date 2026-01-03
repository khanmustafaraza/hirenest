import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="container pt-5 pb-4">
        <div className="row gy-4">
          {/* Brand */}
          <div className="col-md-3">
            <h3 className="footer-brand">
              Hire<span>Nest</span>
            </h3>
            <p className="footer-text">
              A modern job platform connecting ambitious talent with trusted
              companies worldwide.
            </p>

            <p className="footer-email">
              <FaEnvelope />
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
                <a href="/terms">Terms</a>
              </li>
              <li>
                <a href="/privacy">Privacy</a>
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
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">
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
