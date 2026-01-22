import React from "react";
import LeftBar from "../../../components/leftbar/LeftBar";
import RightBar from "../../../components/rightbar/RighBar";
import useJob from "../../../store/jobcontext/JobContext";

const AddJobCategory = () => {
  const { state, handleJobCategoryChange, handleJobCategorySubmit } = useJob();

  return (
    <div className="d-flex">
      <LeftBar />

      <RightBar>
        <div className="container-fluid px-4 py-4">
          {/* Page Title */}
          <div className="mb-4">
            <h5 className="fw-semibold text-dark">Add Job Category</h5>
            <small className="text-muted">
              Create and manage job categories
            </small>
          </div>

          {/* Form Card */}
          <form onSubmit={handleJobCategorySubmit}>
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <label className="form-label small text-muted mb-2">
                  Category Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Frontend Developer"
                  name="categoryName"
                  onChange={(e) => handleJobCategoryChange(e)}
                  value={state.jobCategory.categoryName}
                />

                <div className="d-flex justify-content-end mt-4">
                  <button type="submit" className="btn btn-primary  px-4 py-2">
                    Add New Category
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
