import * as api from "../api";

export const askQuestion = (questionData, navigate, language) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllQuestions(language));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllQuestions = (language) => async (dispatch) => {
  try {
    const { data } = await api.getAllQuestions(language);
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestion = (id, navigate, language) => async (dispatch) => {
  try {
    await api.deleteQuestion(id);
    dispatch(fetchAllQuestions(language));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const voteQuestion = (id, value, userId, language) => async (dispatch) => {
  try {
    await api.voteQuestion(id, value, userId);
    dispatch(fetchAllQuestions(language));
  } catch (error) {
    console.log(error);
  }
};

export const postAnswer = (answerData, language) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered,userId } = answerData;
    const { data } = await api.postAnswer(id, noOfAnswers, answerBody, userAnswered, userId);
    dispatch({ type: "POST_ANSWER", payload: data });
    dispatch(fetchAllQuestions(language));
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = (id, answerId, noOfAnswers, language) => async (dispatch) => {
  try {
      await api.deleteAnswer(id, answerId, noOfAnswers);
      dispatch(fetchAllQuestions(language));
  } catch (error) {
      console.log(error);
  }
};