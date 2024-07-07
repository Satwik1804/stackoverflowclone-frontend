import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { setCurrentLanguage } from "./currentLanguage";
import { fetchAllUsers } from "./users";
import { fetchAllQuestions } from "./question";
import { getAllTags, getTagsList } from "./tags";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(setCurrentLanguage("en"));
    dispatch(fetchAllUsers("en"));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (authData, navigate, setLanguage) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(setCurrentLanguage("en"));
    setLanguage("en");
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const forgotPasswordEmail = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.getOTPEmail(authData);
    dispatch({ type: "FORGOT_PASSWORD", payload: data });
    navigate("/ValidateOTP");
    dispatch(fetchAllUsers("en"));
  } catch (error) {
    console.log(error);
  }
};

export const forgotPasswordSMS = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.getOTPSMS(authData);
    dispatch({ type: "FORGOT_PASSWORD", payload: data });
    navigate("/ValidateOTP");
    dispatch(fetchAllUsers("en"));
  } catch (error) {
    console.log(error);
  }
};

export const validateOTP = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.validateOTP(authData);
    dispatch({ type: "VALIDATE_OTP", payload: data });
    navigate("/SetNewPassword");
    dispatch(fetchAllUsers("en"));
  } catch (error) {
    console.log(error);
  }
};

export const setNewPassword = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.setNewPassword(authData);
    dispatch({ type: "SET_NEW_PASSWORD", payload: data });
    navigate("/Auth");
    dispatch(fetchAllUsers("en"));
  } catch (error) {
    console.log(error);
  }
};

export const authenticateEmail = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.authenticateEmail(authData);
    dispatch({ type: "FORGOT_PASSWORD", payload: data });
    navigate("/AuthenticateOTP");
    dispatch(fetchAllUsers("en"));
  } catch (error) {
    console.log(error);
  }
};

export const authenticateSMS = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.authenticateSMS(authData);
    dispatch({ type: "FORGOT_PASSWORD", payload: data });
    navigate("/AuthenticateOTP");
    dispatch(fetchAllUsers("en"));
  } catch (error) {
    console.log(error);
  }
};

export const authenticateOTP = (authData, navigate, setCurrentLanguage, setLanguage, i18n) => async (dispatch) => {
    const { otp, lang } = authData;
    try {
      const { data } = await api.authenticateOTP({ otp, lang });
      dispatch({ type: "VALIDATE_OTP", payload: data });
      dispatch(fetchAllQuestions(lang));
      dispatch(getAllTags(lang));
      dispatch(getTagsList(lang));
      setCurrentLanguage(lang);
      setLanguage(lang);
      i18n.changeLanguage(lang);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
};

export const accessAuth = (authData, navigate, email, setFirst) => async (dispatch) => {
  try {
    const { data } = await api.accessAuth(authData);
    dispatch({ type: "ACCESS_AUTH", payload: data });
    sessionStorage.setItem('email', email);
    setFirst(false);
    navigate("/Valotp");
  } catch (error) {
    console.log(error);
  }
};

export const otpValidationSuccess = (data) => ({
  type: "OTP_VALIDATION_SUCCESS",
  payload: data,
});

export const validateotp =
  (authData, navigate, setFirst) => async (dispatch) => {
    try {
      const { OTP } = authData;
      const email = sessionStorage.getItem("email");
      const { data } = await api.validateotp({ OTP, email });
      dispatch(otpValidationSuccess(data));
      sessionStorage.removeItem("email");
      sessionStorage.setItem("x-otp-validated", "true");
      navigate("/");
    } catch (error) {
      setFirst(true);
      console.log(error);
    }
  };
