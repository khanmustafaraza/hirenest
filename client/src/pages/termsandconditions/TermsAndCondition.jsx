import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./terms.css";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />

      <section className="policy-page">
        <div className="container">
          <h1 className="policy-title">Terms & Conditions</h1>
          <p className="policy-intro">
            These Terms & Conditions govern your use of HireNest. By using our
            platform, you agree to comply with these terms.
          </p>

          <section className="policy-section">
            <h3>1. Use of Platform</h3>
            <p>
              You must use HireNest only for lawful purposes and comply with all
              applicable laws while using the platform.
            </p>
          </section>

          <section className="policy-section">
            <h3>2. Account Responsibilities</h3>
            <p>
              Users are responsible for maintaining the confidentiality of their
              account information and activity conducted under their account.
            </p>
          </section>

          <section className="policy-section">
            <h3>3. Job Listings</h3>
            <p>
              Companies posting jobs are responsible for the accuracy and
              authenticity of their listings. HireNest does not guarantee job
              availability or hiring.
            </p>
          </section>

          <section className="policy-section">
            <h3>4. Limitation of Liability</h3>
            <p>
              HireNest is not liable for any damages or losses resulting from
              your use of the platform.
            </p>
          </section>

          <section className="policy-section">
            <h3>5. Modifications</h3>
            <p>
              We may update these Terms & Conditions from time to time. Continued
              use of the platform constitutes acceptance of any changes.
            </p>
          </section>

          <section className="policy-section">
            <h3>6. Contact Us</h3>
            <p>
              Questions regarding these Terms & Conditions should be directed to{" "}
              <a href="mailto:support@hirenest.com">support@hirenest.com</a>.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
