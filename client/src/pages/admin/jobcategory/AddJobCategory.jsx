import React from "react";
import useJob from "../../../store/jobcontext/JobContext";
import RightBar from "../../../components/rightbar/RightBar";
import "./jobcat.css";

const AddJobCategory = () => {
  const { state, handleJobCategoryChange, handleJobCategorySubmit } = useJob();

  return (
    <RightBar>
      <div className="container-fluid">
        {/* Page Header */}
        <div>
          <h5 className="fw-semibold mb-1">Add Job Category</h5>
          <p className="text-muted mb-0" style={{ fontSize: "0.875rem" }}>
            Create and manage job categories for job postings
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleJobCategorySubmit}>
          <div className="card">
            <div className="card-body">
              {/* Input Group */}
              <div className="mb-4">
                <label className="form-label fw-medium">Category Name</label>

                <input
                  type="text"
                  className="form-control professional-input"
                  placeholder="Frontend Developer"
                  name="categoryName"
                  value={state.jobCategory.categoryName}
                  onChange={handleJobCategoryChange}
                  required
                />
              </div>

              {/* Actions */}
              <div className="d-flex justify-content-end">
                <button type="submit" className="professional-btn">
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </RightBar>
  );
};

export default AddJobCategory;
