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

const categories = [
  { name: "Design" },
  { name: "Development" },
  { name: "Marketing" },
  { name: "Sales" },
  { name: "Human Resources" },
  { name: "Data Science" },
];

const JobCategories = () => {
const {state,getAllJobCategory} =   useJob();


useEffect(()=>{
getAllJobCategory()
},[])
  return (
    <section className="job-categories-saas">
      <div className="container">
        <div className="section-header text-center">
          <h2>Explore By Category</h2>
          <p>Select a domain to discover relevant roles</p>
        </div>

        <div className="row">
          {state?. jobCategoryList.map((cat, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="category-tile">
              
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
