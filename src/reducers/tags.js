const tagsReducer = (states = [], action) => {
  switch (action.type) {
    case "FETCH_TAGS":
      return action.payload;
    default:
      return states;
  }
};

export default tagsReducer;