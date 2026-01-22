export const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_REGISTER_CHANGE":
      return {
        ...state,
        registerObj: {
          ...state.registerObj,
          [action.payload.name]: action.payload.value,
        },
      };
    case "HANDLE_REGISTER_RESET":
      return {
        ...state,
        registerObj: { userName: "", email: "", password: "", role: "" },
      };
    case "HANDLE_LOGIN_CHANGE":
      return {
        ...state,
        login: { ...state.login, [action.payload.name]: action.payload.value },
      };
    case "HANDLE_LOGIN_RESET":
      return { ...state, login: { email: "", password: "" } };
    case "SET_LOGIN_USER":
      const { token } = action.payload;
      // console.log(token);
      return {
        ...state,

        token: token,

        isLoading: false,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        token: "",
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
