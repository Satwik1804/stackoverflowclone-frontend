import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";
import usersReducer from "./users";
import tagsReducer from "./tags";
import tagsListReducer from "./tagsList";


export default combineReducers({
  authReducer,
  currentUserReducer,
  questionsReducer,
  usersReducer,
  tagsReducer,
  tagsListReducer
});