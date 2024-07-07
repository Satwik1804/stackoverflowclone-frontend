import axios from "axios";

const API = axios.create({
  baseURL: "https://stackoverflowclone-backend-arel.onrender.com",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  if (sessionStorage.getItem('x-otp-validated') === 'true') {
    req.headers['x-otp-validated'] = 'true';
  }
  return req;
});

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

export const getOTPEmail = (authData) => API.patch("/user/forgotPasswordEmail", authData)
export const getOTPSMS = (authData) => API.patch("/user/forgotPasswordSMS", authData)
export const validateOTP = (authData) => API.patch("/user/validateOTP", authData)
export const setNewPassword = (authData) => API.patch("/user/setNewPassword", authData)

export const authenticateEmail = (authData) => API.patch("/user/authenticateEmail", authData)
export const authenticateSMS = (authData) => API.patch("/user/authenticateSMS", authData)
export const authenticateOTP = (authData) => API.patch("/user/authenticateOTP", authData)
 
export const postQuestion = (questionData) => API.post("/questions/Ask", questionData);
export const getAllQuestions = (language) =>  {  return API.get("/questions/get", { params: { language: language }, }); }
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`, { value, userId });

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) => API.patch(`/answers/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId });
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answers/delete/${id}`, { answerId, noOfAnswers });

export const getAllUsers = (language) => { return API.get("/user/getAllUsers", { params: { language: language }, }); }
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData);

export const getTagsList = (language) => { return API.get("/tags/getTagsList", { params: {language: language}, }) }
export const getAllTags = (language) => { return API.get("/tags/getAllTags", { params: {language: language} }) }

export const accessAuth = (authData) => API.post("/user/accessAuthentication", authData) 
export const validateotp = (authData) => API.post("/user/validateotp", authData)