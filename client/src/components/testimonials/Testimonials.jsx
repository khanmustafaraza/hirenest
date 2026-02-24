import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./testimonials.css";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Frontend Developer",
    feedback: "JobFinder helped me land a dream job at Google within 2 weeks!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Amit Verma",
    role: "Backend Engineer",
    feedback:
      "The application process was smooth and companies responded quickly.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-premium">
      <div className="container">
        <div className="section-header-premium text-center mb-5">
          <h2>What Our Users Say</h2>
          <p>Real feedback from job seekers who found their dream roles</p>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div className="col-md-6" key={i}>
              <div className="testimonial-card-premium">
                <div className="testimonial-header-premium d-flex align-items-center mb-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="testimonial-image-premium"
                  />
                  <div className="ms-3">
                    <h6 className="name-premium mb-1">{t.name}</h6>
                    <small className="role-premium">{t.role}</small>
                  </div>
                </div>

                <div className="testimonial-body-premium">
                  <FaQuoteLeft className="quote-icon-premium" />
                  <p className="feedback-premium">{t.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
