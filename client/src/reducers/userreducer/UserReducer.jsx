const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_PROFILE_CHANGE": {
      const { name, value } = action.payload;
      return {
        ...state,
        profileObj: {
          ...state.profileObj,
          [name]:
            name === "profile_Pic" || name === "resume" ? value[0] : value, // keep current logic
        },
      };
    }

    case "SET_USER_PROFILE":
      return {
        ...state,
        userProfile: action.payload, // store fetched profile
      };

    default:
      return state;
  }
};

export default reducer;
