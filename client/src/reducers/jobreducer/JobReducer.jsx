const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_JOB_CATEGORY_CHANGE":
      return {
        ...state,
        jobCategory: {
          ...state.jobCategory,
          [action.payload.name]: action.payload.value,
        },
      };
    case "GET_ALL_JOB_CATEGORY_LIST":
      return {
        ...state,
        jobCategoryList: action.payload.data,
      };
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
    case "SET_JOB_DETAILS":
      return {
        ...state,
        jobDetailObj: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
