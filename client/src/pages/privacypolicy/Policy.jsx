import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./policy.css";

const Policy = () => {
  return (
    <>
      <Navbar />

      <section className="policy-page">
        <div className="container">
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-intro">
            Your privacy is important to us. This Privacy Policy explains how
            we collect, use, and protect your information on HireNest.
          </p>

          <section className="policy-section">
            <h3>1. Information We Collect</h3>
            <p>
              We may collect personal information such as your name, email
              address, and job preferences when you use our platform.
            </p>
          </section>

          <section className="policy-section">
            <h3>2. How We Use Your Information</h3>
            <p>
              The information we collect helps us provide relevant job
              recommendations, improve our services, and communicate important
              updates.
            </p>
          </section>

          <section className="policy-section">
            <h3>3. Data Sharing & Security</h3>
            <p>
              We do not sell your personal data. We take industry-standard
              security measures to protect your information from unauthorized
              access.
            </p>
          </section>

          <section className="policy-section">
            <h3>4. Cookies & Tracking</h3>
            <p>
              We use cookies to enhance your experience and gather analytics to
              improve our platform.
            </p>
          </section>

          <section className="policy-section">
            <h3>5. Your Rights</h3>
            <p>
              You can request access, correction, or deletion of your personal
              information at any time by contacting our support team.
            </p>
          </section>

          <section className="policy-section">
            <h3>6. Contact Us</h3>
            <p>
              For questions regarding this Privacy Policy, reach out to{" "}
              <a href="mailto:support@hirenest.com">support@hirenest.com</a>.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Policy;
