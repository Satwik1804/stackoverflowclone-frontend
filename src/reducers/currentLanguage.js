const initialState = localStorage.getItem("language") || "en";

const currentLanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CURRENT_LANG":
      localStorage.setItem("language", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default currentLanguageReducer;
