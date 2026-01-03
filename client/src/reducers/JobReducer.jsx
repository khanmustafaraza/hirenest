const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_JOB_CHANGE":
      const { name, value } = action.payload;
      return {
        ...state,
        jobFields: {
          ...state.jobFields,
          [name]: value,
        },
      };
    case "SET_ALL_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
