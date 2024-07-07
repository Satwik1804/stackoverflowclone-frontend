import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { askQuestion } from '../../actions/question';
import "./AskQuestion.css";

const AskQuestion = () => {
  const { t } = useTranslation('global'); 
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionBody, setQuestionBody] = useState('');
  const [questionTags, setQuestionTags] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => (state.currentUserReducer))
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User?.result?.name, userId: User?.result?._id }, navigate, User?.result?.lang))
  }

  const handleEnter = (e) => {
    if(e.key === "Enter"){
      setQuestionBody(questionBody+"\n")
    }
  }

  return (
    <div className='ask-question'>
       <div className='ask-ques-container'>
          <h1>{t("askQuestion.pageTitle")}</h1>
          <form onSubmit={handleSubmit}>
            <div className='ask-form-container'>
                <label htmlFor='ask-ques-title'>
                    <h4>{t("askQuestion.titleLabel")}</h4>
                    <p>{t("askQuestion.titleHint")}</p>
                    <input type='text' id='ask-ques-title' placeholder={t("askQuestion.titlePlaceholder")} onChange={(e) => {setQuestionTitle(e.target.value)}} />
                </label>
                <label htmlFor='ask-ques-body'>
                    <h4>{t("askQuestion.bodyLabel")}</h4>
                    <p>{t("askQuestion.bodyHint")}</p>
                    <textarea name="ask-ques-body" id="ask-ques-body" cols='30' rows='10' placeholder={t("askQuestion.bodyPlaceholder")} onChange={(e) => {setQuestionBody(e.target.value)}} onKeyDown={handleEnter}/> 
                </label>
                <label htmlFor='ask-ques-tags'>
                    <h4>{t("askQuestion.tagsLabel")}</h4>
                    <p>{t("askQuestion.tagsHint")}</p>
                    <input type='text' id='ask-ques-tags' placeholder={t("askQuestion.tagsPlaceholder")} onChange={(e) => {setQuestionTags(e.target.value.split(" "))}} onKeyDown={handleEnter}/> 
                </label>
            </div>
            <input type='submit' value={t("askQuestion.reviewButton")} className='review-btn'/>
          </form>
       </div>
    </div>
  )
}

export default AskQuestion;