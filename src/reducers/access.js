const initialState = { otpValidationSuccess: false };

const accessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OTP_VALIDATION_SUCCESS":
      return { ...state, otpValidationSuccess: true };
    default:
      return state;
  }
};

export default accessReducer;