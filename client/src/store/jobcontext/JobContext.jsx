import { createContext, useContext, useReducer } from "react";
import reducer from "../../reducers/jobreducer/JobReducer";
import { toast } from "react-toastify";

// todo Create the context
const CreateJobContext = createContext();
const VITE_API_URL = import.meta.env.VITE_API_URL;

// // Initial state
const initialState = {
  jobs: [],
  jobCategory: {
    categoryName: "",
  },
  jobCategoryList: [],
  jobFields: {
    title: "", // Job Title
    companyName: "", // Company Name
    companyWebsite: "", // Company Website
    location: "", // Location
    type: "", // Job Type
    salary: "",

    experience: "", // Experience (e.g. 2-4 years)
    education: "", // Education (e.g. Bachelor's in CS)
    deadline: "", // Application Deadline (mm/dd/yyyy)
    contactEmail: "", // Contact Email
    responsibilities: "", // Comma separated
    requirements: "", // Comma separated
    skills: "", // Comma separated
    tags: "", // Comma separated
    description: "",
  }, // You can start with empty or preloaded jobs
};

// Context provider component
const JobAppProvider = ({ children }) => {
  // * use reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleJobCategoryChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "HANDLE_JOB_CATEGORY_CHANGE",
      payload: { name, value },
    });
  };
  const handleJobCategorySubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${VITE_API_URL}/api/admin/job-category/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryName: state.jobCategory.categoryName,
          }),
        }
      );

      const data = await res.json();
      console.log(data);
      if (data.success) {
        toast.success(data.message);
      }

      if (!res.ok) {
        console.error(data.message || "Something went wrong");
        return;
      }

      console.log("Success:", data);
    } catch (error) {
      console.error("Category submit error:", error);
    }
  };

  const getAllJobCategory = async () => {
    try {
      const res = await fetch(
        `${VITE_API_URL}/api/admin/job-category/category-list`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (data.success) {
        dispatch({
          type: "GET_ALL_JOB_CATEGORY_LIST",
          payload: {
            data: data.data,
          },
        });
        toast.success(data.message);
      }

      if (!res.ok) {
        console.error(data.message || "Something went wrong");
        return;
      }
    } catch (error) {
      console.error("Category submit error:", error);
    }
  };

  //   todo handle job change

  const handleJobChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({
      type: "HANDLE_JOB_CHANGE",
      payload: {
        name,
        value,
      },
    });
  };

  // ? submit a new job
  const handleJobSubmit = async (e) => {
    e.preventDefault();
    const jobObj = {
      ...state.jobFields,
      responsibilities: state.jobFields.responsibilities
        .split(",")
        .map((i) => i.trim()),
      requirements: state.jobFields.requirements
        .split(",")
        .map((i) => i.trim()),
      skills: state.jobFields.skills.split(",").map((i) => i.trim()),
      tags: state.jobFields.tags.split(",").map((i) => i.trim()),
    };

    const res = await fetch("http://localhost:5000/api/job/create-new-job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobObj),
    });
    const data = await res.json();
    console.log(data);
  };
  // ! get all jobs
  const getAllJobs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/job/all-jobs");
      const data = await res.json();
      dispatch({ type: "SET_ALL_JOBS", payload: data.jobs });
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    }
  };
  // todo delete a job

  const handleJobDelete = async (id) => {
    try {
      const isDelete = confirm("Are you Sure You Want To Delete This Job");
      if (!isDelete) {
        return;
      }
      const res = await fetch(
        `http://localhost:5000/api/job/delete-job/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateJobContext.Provider
      value={{
        state,
        handleJobCategoryChange,
        handleJobCategorySubmit,
        getAllJobCategory,
        handleJobChange,
        handleJobSubmit,
        getAllJobs,
        handleJobDelete,
      }}
    >
      {children}
    </CreateJobContext.Provider>
  );
};

// create a cutom hook
const useJob = () => {
  return useContext(CreateJobContext);
};

export { JobAppProvider };

export default useJob;
