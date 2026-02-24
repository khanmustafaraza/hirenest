import React from "react";
import "./contact.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebookF,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contact-section py-5 mt-60">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Have a question, feedback, or collaboration idea? We'd love to
              hear from you.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-card p-5 rounded-4 shadow-sm">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fw-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control form-input"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-input"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="form-control form-input"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-elegant w-100 py-2">
                    ✉️ Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="contact-info-card p-5 rounded-4 shadow-sm h-100">
                <h4 className="fw-bold mb-4">Contact Information</h4>
                <p className="info-item">
                  <FaEnvelope className="me-2 text-primary" />{" "}
                  support@jobfinder.com
                </p>
                <p className="info-item">
                  <FaPhoneAlt className="me-2 text-primary" /> +91 98765 43210
                </p>
                <p className="info-item">
                  <FaMapMarkerAlt className="me-2 text-primary" /> 3rd Floor,
                  TechPark, Bangalore, India
                </p>

                <div className="social-icons mt-4 d-flex gap-3">
                  <a href="#" className="social-icon">
                    <FaGlobe />
                  </a>
                  <a href="#" className="social-icon">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="social-icon">
                    <FaFacebookF />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
