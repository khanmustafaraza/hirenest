import React, { useEffect } from "react";
import LeftBar from "../../../components/leftbar/LeftBar";
import RightBar from "../../../components/rightbar/RighBar";
import { FaTrash } from "react-icons/fa";
import useJob from "../../../store/jobcontext/JobContext";
import "./jobcat.css";

const JobCategoryList = () => {
  const { state, getAllJobCategory } = useJob();

  useEffect(() => {
    getAllJobCategory();
  }, []);

  return (
    <div className="job-category-page d-flex">
      <LeftBar />

      <div className="content-wrapper">
        <RightBar>
          <div className="container-fluid px-4 py-4">
            {/* Header */}
            <div className="page-header mb-4">
              <div>
                <h5 className="fw-semibold mb-1">Job Categories</h5>
                <p className="text-muted mb-0">
                  Organize and manage categories for job postings
                </p>
              </div>
            </div>

            {/* Card */}
            <div className="card category-card">
              <div className="card-body p-0">

                {/* Scroll Container */}
                <div className="table-scroll-wrapper">
                  <table className="table category-table mb-0 align-middle">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {state?.jobCategoryList?.length > 0 ? (
                        state.jobCategoryList.map((category, index) => (
                          <tr key={category._id}>
                            <td>
                              {String(index + 1).padStart(2, "0")}
                            </td>

                            <td>{category.categoryName}</td>

                            <td className="text-end">
                              <button
                                className="icon-btn delete-btn"
                                title="Delete Category"
                              >
                                <FaTrash size={13} />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3" className="text-center py-4">
                            No job categories available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </RightBar>
      </div>
    </div>
  );
};

export default JobCategoryList;