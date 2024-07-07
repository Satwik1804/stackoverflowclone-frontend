const tagsListReducer = (states = [], action) => {
  switch (action.type) {
    case "FETCH_TAGS_LIST":
      return action.payload;
    default:
      return states;
  }
};

export default tagsListReducer;