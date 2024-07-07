import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import { getAllTags, getTagsList } from "./actions/tags";

const Container = ({ first, language }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    var storedLanguage = localStorage.getItem("language");
    if (storedLanguage === null || storedLanguage === "null") {
      storedLanguage = "en";
    }
    dispatch(fetchAllQuestions(storedLanguage));
    dispatch(fetchAllUsers(storedLanguage));
    dispatch(getAllTags(storedLanguage));
    dispatch(getTagsList(storedLanguage, navigate, first));
  }, [dispatch, language, navigate, first]);

  return null;
};

export default Container;