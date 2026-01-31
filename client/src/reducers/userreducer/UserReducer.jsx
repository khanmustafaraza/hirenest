const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_PROFILE_CHANGE": {
      const { name, value } = action.payload;

      return {
        ...state,
        profileObj: {
          ...state.profileObj,
          [name]:
            name === "profile_Pic" || name === "resume"
              ? value[0]
              : value
        }
      };
    }

    default:
      return state;
  }
};

export default reducer;
