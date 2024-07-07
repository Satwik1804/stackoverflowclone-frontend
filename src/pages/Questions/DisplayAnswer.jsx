import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import moment from 'moment';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Avatar from '../../components/Avatar/Avatar';
import { deleteAnswer } from '../../actions/question'; 

const DisplayAnswer = ({ question, handleShare }) => {
    const { t } = useTranslation('global');
    const location = useLocation();
    const url = "https://stackoverflowclone-frontend.netlify.app/";
    const dispatch = useDispatch();
    const User = useSelector((state) => state.currentUserReducer);

    const handleDelete = (answerId, noOfAnswers) => {
        dispatch(deleteAnswer(question._id, answerId, noOfAnswers - 1, User?.result?.lang));
    };

    return (
        <div>
            {
                question.answer.map((ans) => (
                    <div className='display-ans' key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className='question-actions-user'>
                            <div>
                                <CopyToClipboard text={url + location.pathname}>
                                    <button type='button' onClick={handleShare}>{t('questionsDetails.share')}</button>
                                </CopyToClipboard>
                                {
                                    User?.result?._id === ans?.userId && (
                                        <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers)}>{t('questionsDetails.delete')}</button>
                                    )
                                }
                            </div>
                            <div>
                                <p>{t('questionsDetails.answered')} {moment(ans.answeredOn).fromNow()}</p>
                                <Link to={`/Users/${ans.userId}`} className='user-link' style={{ color: "#0086d8" }}>
                                    <Avatar backgroundColor='green' px='8px' py='5px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                        {ans.userAnswered}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default DisplayAnswer;