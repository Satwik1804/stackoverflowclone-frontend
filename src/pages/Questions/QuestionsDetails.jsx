import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next'; 

import "./Questions.css";
import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from './DisplayAnswer';
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question';

const QuestionsDetails = () => {
    const { t } = useTranslation('global'); 
    const { id } = useParams();
    const [Answer, setAnswer] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const url = "https://stackoverflowclone-frontend.netlify.app/";
    const questionList = useSelector((state) => state.questionsReducer);
    const User = useSelector((state) => state.currentUserReducer);

    const handlePostAns = (e, answerLength) => {
        e.preventDefault();
        if (User === null) {
            alert(t('questionsDetails.loginToAnswer')); 
            navigate("/Auth");
        } else {
            if (Answer === "") {
                alert(t('questionsDetails.enterAnswer')); 
            } else {
                dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }, User?.result?.lang));
            }
        }
    };

    const handleShare = () => {
        alert(t('questionsDetails.copiedUrl') + url + location.pathname); 
    };

    const handleDelete = () => {
        dispatch(deleteQuestion(id, navigate, User?.result?.lang));
    };

    const handleUpVote = () => {
        dispatch(voteQuestion(id, 'upVote', User.result._id, User?.result?.lang));
    };

    const handleDownVote = () => {
        dispatch(voteQuestion(id, 'downVote', User.result._id, User?.result?.lang));
    };

    return (
        <div className='question-details-page'>
            {questionList.data === null ? (
                <h1>{t('questionsDetails.loading')}</h1>
            ) : (
                questionList.data.filter((question) => question._id === id).map((question) => (
                    <div key={question._id}>
                        <section className='question-details-container'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <div className='question-votes'>
                                    <img src={upvote} alt='upvote' width='18' onClick={handleUpVote} />
                                    <p>{question.upVote.length - question.downVote.length}</p>
                                    <img src={downvote} alt='downvote' width='18' onClick={handleDownVote} />
                                </div>
                                <div style={{ width: "100%" }}>
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className='question-details-tags'>
                                        {question.questionTags.map((tag) => (
                                            <p key={tag}>{tag}</p>
                                        ))}
                                    </div>
                                    <div className='question-actions-user'>
                                        <div>
                                            <CopyToClipboard text={url + location.pathname}>
                                                <button type='button' onClick={handleShare}>{t('questionsDetails.share')}</button> 
                                            </CopyToClipboard>
                                            {User?.result?._id === question?.userId && (
                                                <button type='button' onClick={handleDelete}>{t('questionsDetails.delete')}</button> 
                                            )} 
                                        </div>
                                        <div>
                                            <p>{t('questionsDetails.asked')} {moment(question.askedOn).fromNow()}</p> 
                                            <Link to={`/Users/${question.userId}`} className='user-link' style={{ color: "#0086d8" }}>
                                                <Avatar backgroundColor='orange' px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div>
                                                    {question.userPosted}
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {question.noOfAnswers !== 0 && (
                            <section>
                                <h3>{question.noOfAnswers} {t('questionsDetails.answers')}</h3> 
                                <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                            </section>
                        )}
                        <section className='post-ans-container'>
                            <h3>{t('questionsDetails.yourAnswer')}</h3> 
                            <form onSubmit={(e) => { handlePostAns(e, question.answer.length) }}>
                                <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea>
                                <input type="Submit" className='post-ans-btn' value={t('questionsDetails.postYourAnswer')} />
                            </form>
                            <p>
                                {t('questionsDetails.browseOtherQuestions')}
                                {question.questionTags.map((tag) => (
                                    <Link to="/Tags" key={tag} className='ans-tags'> {tag} </Link>
                                ))} {t('questionsDetails.or')}
                                <Link to="/AskQuestion" style={{ textDecoration: "none", color: "#009dff" }}> {t('questionsDetails.askYourOwnQuestion')}</Link> 
                            </p>
                        </section>
                    </div>
                ))
            )}
        </div>
    );
}

export default QuestionsDetails;