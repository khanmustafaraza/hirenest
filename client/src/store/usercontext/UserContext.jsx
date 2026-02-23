import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import reducer from "../../reducers/userreducer/UserReducer";
import useAuth from "../authcontext/AuthContext";

// Create the context
const CreateUserContext = createContext();
const VITE_API_URL = import.meta.env.VITE_API_URL;

// Initial state
const initialState = {
  profileObj: {
    profile_Pic: null,
    fullName: "",
    phone: "",
    dob: "",
    experience: "",
    address: "",
  },
  profileData: {
    profile_Pic: null,
    fullName: "",
    phone: "",
    dob: "",
    experience: "",
    address: "",
    resume: null,
  },
  userProfile: null, // fetched profile
  appliedJobs:[]
};

// Context provider component
const UserAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    state: { token },
  } = useAuth();

  // Handle form input changes
  const handleProfileChange = (e) => {
    const { name, value, files, type } = e.target;

    dispatch({
      type: "HANDLE_PROFILE_CHANGE",
      payload: {
        name,
        value: type === "file" ? files : value, // keep your current logic
      },
    });
  };

  // Submit user profile form
  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const { profile_Pic, resume, fullName, phone, dob, experience, address } =
      state.profileObj;

    formData.append("profile_Pic", profile_Pic);
    formData.append("resume", resume);
    formData.append("fullName", fullName);
    formData.append("phone", phone);
    formData.append("dob", dob);
    formData.append("experience", experience);
    formData.append("address", address);

    try {
      const res = await fetch(`${VITE_API_URL}/api/user/add-user-profile`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData, // browser sets multipart/form-data automatically
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      // console.log("Profile submit error:", error);
      toast.error("Failed to submit profile");
    }
  };

  // Fetch user profile by ID
  const getUserProfileById = async () => {
  
    if (!token) return;

    try {
      const res = await fetch(`${VITE_API_URL}/api/user/user-profile-by-id`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
     

      if (data.success) {
        dispatch({ type: "SET_USER_PROFILE", payload: data.data });
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      // console.log("Profile fetch error:", error);
      toast.error("Failed to fetch profile");
    }
  };
  const userAppliedJobApplication = async (id) => {
    if(!token){
      return
    }
  try {
    const res = await fetch(
      `${VITE_API_URL}/api/user/apply-job-application/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    // 👇 IMPORTANT PART
    if (!res.ok) {
      if (res.status === 401) {
        alert("Please login again.");
      } else if (res.status === 409) {
        alert(data.msg);
      } else {
        alert("Something went wrong.");
      }
      return;
    }

    // ✅ success case
    alert(data.msg);

  } catch (error) {
    console.error("Network error:", error);
    alert("Server is not reachable.");
  }
};

  const userAppliedJobList = async() =>{
     try {
      const res  = await fetch(`${VITE_API_URL}/api/user/apply-job-application-list`,{
        method:"GET",
        headers:{
          Authorization : `Bearer ${token}`
        }
      })
      const data = await res.json();
      // alert(data)
      // console.log(data)
      dispatch({
        type:"SET_APPLIED_JOB",
        payload:data.data
      })
      
    } catch (error) {
      
    }
  }
 

  return (
    <CreateUserContext.Provider
      value={{
        state,
        handleProfileChange,
        handleProfileSubmit,
        getUserProfileById,
        userAppliedJobApplication,
        userAppliedJobList
      }}
    >
      {children}
    </CreateUserContext.Provider>
  );
};

// Custom hook
const useUserContext = () => {
  return useContext(CreateUserContext);
};

export { UserAppProvider };
export default useUserContext;
