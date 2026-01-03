import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/JobReducer";

// todo Create the context
const CreateJobContext = createContext();

// // Initial state
const initialState = {
  jobs: [],
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

export default JobAppProvider;

export { useJob };
