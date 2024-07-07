import React from 'react';
import { useTranslation } from 'react-i18next'; 

import "./RightSidebar.css";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import stackoverflowlogo from "../../assets/blacklogo.svg";

const Widget = () => {
    const { t } = useTranslation('global'); 

    return (
        <div className='widget'>
            <h4>{t('widget.overflowBlog')}</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt='pen' width={18}/>
                    <p>{t('widget.observability')}</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt='pen' width={18}/>
                    <p>{t('widget.podcast')}</p>
                </div>
            </div>
            <h4>{t('widget.featuredMeta')}</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt='pen' width={18}/>
                    <p>{t('widget.reviewQueue')}</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt='pen' width={18}/>
                    <p>{t('widget.welcomeAssociates')}</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={stackoverflowlogo} alt='pen' width={18}/>
                    <p>{t('widget.outdatedAnswers')}</p>
                </div>
            </div>
            <h4>{t('widget.hotMetaPosts')}</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <p>38</p>
                    <p>{t('widget.spamFlag')}</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <p>20</p>
                    <p>{t('widget.bestCourse')}</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <p>14</p>
                    <p>{t('widget.usefulComment')}</p>
                </div>
            </div>
        </div>
    );
}

export default Widget;