import { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { reducer } from "../reducers/AuthReducer";

const API_URL = import.meta.env.VITE_API_URL;

const AuthContext = createContext();

const initialState = {
  register: { username: "", email: "", password: "", role: "" },
  login: { email: "", password: "" },
  isLoading: false,
  isError: false,
  user: { username: "", role: "", isAdmin: false, token: "" }, // single source of truth
};

const AuthAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  // Populate state from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    if (storedUser && token) {
      dispatch({
        type: "SET_LOGIN_USER",
        payload: { user: storedUser, token },
      });
    }
  }, []);

  // Sync localStorage whenever user state changes
  useEffect(() => {
    if (state.user.token) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: state.user.username,
          role: state.user.role,
          isAdmin: state.user.isAdmin,
        })
      );
      localStorage.setItem("token", state.user.token);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, [state.user]);

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
        body: JSON.stringify(state.register),
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
    <AuthContext.Provider
      value={{
        state,
        handleRegisterChange,
        handleRegisterSubmit,
        handleLoginChange,
        handleLoginSubmit,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthAppProvider, useAuth };
