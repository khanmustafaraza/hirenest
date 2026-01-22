import React from "react";
import LeftBar from "../../../components/leftbar/LeftBar";
import RightBar from "../../../components/rightbar/RighBar";
import useJob from "../../../store/jobcontext/JobContext";
import "./jobcategory.css";

const AddJobCategory = () => {
  const { state, handleJobCategoryChange, handleJobCategorySubmit } = useJob();

  return (
    <div className="d-flex">
      <LeftBar />

      <RightBar>
        <div className="container-fluid px-4 py-4">
          {/* Page Header */}
          <div className="mb-4">
            <h5 className="fw-semibold mb-1">Add Job Category</h5>
            <p className="text-muted mb-0" style={{ fontSize: "0.875rem" }}>
              Create and manage job categories for job postings
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleJobCategorySubmit}>
            <div className="card border-0 shadow-sm rounded-3">
              <div className="card-body p-4">
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
                  <button type="submit" className="btn professional-btn px-4">
                    Add Category
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </RightBar>
    </div>
  );
};

export default AddJobCategory;
