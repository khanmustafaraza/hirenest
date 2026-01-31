import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";
import reducer from "../../reducers/userreducer/UserReducer";
import useAuth from "../authcontext/AuthContext";

// todo Create the context
const CreateUserContext = createContext();
const VITE_API_URL = import.meta.env.VITE_API_URL;

// // Initial state
const initialState = {
  profileObj: {
    profile_Pic: null,
    fullName: "",
    phone: "",
    dob: "",
    experience: "",
    address: "",
  },
};

// Context provider component
const UserAppProvider = ({ children }) => {
  const {state:{token}} =   useAuth();
  console.log(token)
 const handleProfileChange = (e) => {
    const { name, value, files, type } = e.target;
  
    dispatch({
      type: "HANDLE_PROFILE_CHANGE",
      payload: {
        name,
        value: type === "file" ? files : value
      }
    });
  };
const handleProfileSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  // Make sure you reference the nested profileObj
  formData.append("fullName", state.profileObj.fullName);
  formData.append("email", state.profileObj.email);
  formData.append("profile_Pic", state.profileObj.profile_Pic); // File object
  formData.append("resume", state.profileObj.resume);           // File object

  console.log("Form Data:", state.profileObj);

  try {
    const res = await fetch(`${VITE_API_URL}/api/user/add-user-profile`, {
      method: "POST",
      body: formData // Do NOT set Content-Type, browser sets multipart/form-data
    });

    const data = await res.json();

    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.error("Profile submit error:", error);
  }
};

  // * use reducer
  const [state, dispatch] = useReducer(reducer, initialState);

 

  return (
    <CreateUserContext.Provider
      value={{
        state,
        handleProfileChange,
        handleProfileSubmit
      }}
    >
      {children}
    </CreateUserContext.Provider>
  );
};

// create a cutom hook
const useUserContext = () => {
  return useContext(CreateUserContext);
};

export { UserAppProvider };

export default useUserContext;
