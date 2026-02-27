import React, { useEffect } from "react";
import {
  FaPaintBrush,
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaDatabase,
} from "react-icons/fa";
import "./jobcategories.css";
import useJob from "../../store/jobcontext/JobContext";
import { NavLink } from "react-router-dom";

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
    <section className="job-categories-premium">
      <div className="container">
        <div className="section-header-premium text-center mb-5">
          <h2>Explore By Category</h2>
          <p>Select a domain to discover relevant roles</p>
        </div>

        <div className="row g-4" title="View Job">
          {state?.jobCategoryList?.map((cat, i) => (
            <NavLink to ={`/job-category/${cat._id}`} className="col-6 col-md-4 col-lg-3" key={cat._id}>
              <div key={i} >
                <div className="category-card-premium">
                  <div className="category-icon-premium">
                    {categoryIcons[cat.categoryName] || <FaDatabase />}
                  </div>
                  <span className="category-name-premium">
                    {cat.categoryName}
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
