const authReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
      localStorage.setItem("language", "en");
      return { ...state, data: action?.data };
    case "LOGOUT":
      localStorage.clear();
      return { ...state, data: null };
    case "FORGOT_PASSWORD":
      return { ...state };
    case "VALIDATE_OTP":
      return { ...state };
    case "SET_NEW_PASSWORD":
      return { ...state };
    case "ACCESS_AUTH":
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;