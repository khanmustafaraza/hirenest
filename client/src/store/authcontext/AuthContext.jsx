import { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { reducer } from "../../reducers/authreducer/AuthReducer";
const AuthAppContext = createContext();

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  registerObj: { userName: "", email: "", password: "" },
  login: { email: "", password: "" },
  isLoading: false,
  isError: false,
  token: "", // single source of truth
};

const AuthAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(storedUser.user);
    // const token = localStorage.getItem("token");
    if (token) {
      dispatch({
        type: "SET_LOGIN_USER",
        payload: { token },
      });
    }
  }, []);

  // Sync localStorage whenever user state changes
  useEffect(() => {
    if (state.token) {
      localStorage.setItem("token", state.token);
    } else {
      localStorage.removeItem("token");
    }
  }, [state.token]);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "HANDLE_REGISTER_CHANGE", payload: { name, value } });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "HANDLE_LOGIN_CHANGE", payload: { name, value } });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "SET_LOADING" });

      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state.login),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) throw new Error(data.message || "Invalid credentials");

      // Update state
      dispatch({ type: "SET_LOGIN_USER", payload: data.payload });

      toast.success("Login successful!");
      navigate("/");
      dispatch({ type: "HANDLE_LOGIN_RESET" });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT_USER" });
    toast.info("Logged out successfully!");
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "SET_LOADING" });
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state.registerObj),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      toast.success(data.message || "Registered successfully!");
      dispatch({ type: "HANDLE_REGISTER_RESET" });
      dispatch({ type: "SET_SUCCESS" });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  };
  return (
    <AuthAppContext.Provider
      value={{
        state,
        handleRegisterChange,
        handleRegisterSubmit,
        handleLoginSubmit,
        handleLoginChange,
        handleLogout,
      }}
    >
      {children}
    </AuthAppContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthAppContext);
};

export default useAuth;
export { AuthAppProvider };
