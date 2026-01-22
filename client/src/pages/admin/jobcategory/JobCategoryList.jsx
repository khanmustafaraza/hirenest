import React from "react";
import LeftBar from "../../../components/leftbar/LeftBar";
import RightBar from "../../../components/rightbar/RighBar";
import { FaClock, FaMoneyBill, FaTrash, FaUserGraduate } from "react-icons/fa";
import { useEffect } from "react";
import useJob from "../../../store/jobcontext/JobContext";

const JobCategoryList = () => {
  const { state, getAllJobCategory } = useJob();
  useEffect(() => {
    getAllJobCategory();
  }, []);
  return (
    <div className="d-flex">
      <LeftBar />

      <RightBar>
        <div className="container-fluid px-4 py-4">
          {/* Page Title */}
          <div className="mb-4">
            <h5 className="fw-semibold text-dark">Job Category List</h5>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="text-muted text-center">
                <tr>
                  <th>#</th>
                  <th>Category Name</th>

                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <td>01</td>
                <td>category Name</td>
                <td>
                  <div>
                    <div>
                      <FaTrash />
                    </div>
                  </div>
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </RightBar>
    </div>
  );
};

export default JobCategoryList;
