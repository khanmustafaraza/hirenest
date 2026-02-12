import React, { useEffect } from "react";
import {
  FaPaintBrush,
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaDatabase,
} from "react-icons/fa";
import "./JobCategories.css";
import useJob from "../../store/jobcontext/JobContext";

// Map category names to icons
const categoryIcons = {
  Design: <FaPaintBrush />,
  Development: <FaCode />,
  Marketing: <FaBullhorn />,
  Sales: <FaChartLine />,
  "Human Resources": <FaUsers />,
  "Data Science": <FaDatabase />,
};

const JobCategories = () => {
  const { state, getAllJobCategory } = useJob();

  useEffect(() => {
    getAllJobCategory();
  }, []);

  return (
    <section className="job-categories">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>Explore By Category</h2>
          <p>Select a domain to discover relevant roles</p>
        </div>

        <div className="row">
          {state?.jobCategoryList?.map((cat, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="category-card">
                <div className="category-icon">
                  {categoryIcons[cat.categoryName] || <FaDatabase />}
                </div>
                <span className="category-name">{cat.categoryName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
