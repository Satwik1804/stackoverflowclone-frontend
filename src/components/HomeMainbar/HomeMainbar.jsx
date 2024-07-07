import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import QuestionList from './QuestionsList';
import "./HomeMainbar.css";

const HomeMainbar = () => {
    const { t } = useTranslation('global'); 

    const user = useSelector(state => state.currentUserReducer);
    const location = useLocation();
    const navigate = useNavigate();
    const questionsList = useSelector(state => state.questionsReducer);

    const checkAuth = () => {
        if (user === null) {
            alert(t('alerts.loginToAskQuestion')); 
            navigate("/Auth");
        } else {
            navigate("/AskQuestion");
        }
    };

    return (
        <div className="main-bar">
            <div className="main-bar-header">
                {location.pathname === "/" ? (
                    <h1>{t('homeMainbar.topQuestions')}</h1> 
                ) : (
                    <h1>{t('homeMainbar.allQuestions')}</h1> 
                )}
                <button onClick={checkAuth} className="ask-btn">
                    {t('homeMainbar.askQuestion')} 
                </button>
            </div>
            <div>
                {questionsList.data === null ? (
                    <h1>{t('homeMainbar.loading')}</h1> 
                ) : (
                    <>
                        <p>{t('homeMainbar.questionsCount', { count: questionsList.data.length })}</p>
                        <QuestionList questionsList={questionsList.data} />
                    </>
                )}
            </div>
        </div>
    );
};

export default HomeMainbar;