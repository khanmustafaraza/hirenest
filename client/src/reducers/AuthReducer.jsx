export const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_REGISTER_CHANGE":
      return {
        ...state,
        register: {
          ...state.register,
          [action.payload.name]: action.payload.value,
        },
      };
    case "HANDLE_REGISTER_RESET":
      return {
        ...state,
        register: { username: "", email: "", password: "", role: "" },
      };
    case "HANDLE_LOGIN_CHANGE":
      return {
        ...state,
        login: { ...state.login, [action.payload.name]: action.payload.value },
      };
    case "HANDLE_LOGIN_RESET":
      return { ...state, login: { email: "", password: "" } };
    case "SET_LOGIN_USER":
      const { user, token } = action.payload;
      return {
        ...state,
        user: {
          username: user.username,
          role: user.role,
          isAdmin: user.isAdmin,
          token,
        },
        isLoading: false,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: { username: "", role: "", isAdmin: false, token: "" },
      };
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "SET_SUCCESS":
      return { ...state, isLoading: false };
    case "SET_ERROR":
      return { ...state, isLoading: false, isError: action.payload };
    default:
      return state;
  }
};
