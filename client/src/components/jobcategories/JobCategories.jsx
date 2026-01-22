import React from "react";
import {
  FaPaintBrush,
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaDatabase,
} from "react-icons/fa";
import "./JobCategories.css";

const categories = [
  { name: "Design" },
  { name: "Development" },
  { name: "Marketing" },
  { name: "Sales" },
  { name: "Human Resources" },
  { name: "Data Science" },
];

const JobCategories = () => {
  return (
    <section className="job-categories-saas">
      <div className="container">
        <div className="section-header text-center">
          <h2>Explore By Category</h2>
          <p>Select a domain to discover relevant roles</p>
        </div>

        <div className="row">
          {categories.map((cat, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="category-tile">
                <span className="category-icon">{cat.icon}</span>
                <span className="category-name">{cat.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
