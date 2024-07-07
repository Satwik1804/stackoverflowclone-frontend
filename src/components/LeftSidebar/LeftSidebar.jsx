import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Globe from "../../assets/Globe.svg";
import "./LeftSidebar.css";

function LeftSidebar() {
    const { t } = useTranslation('global'); 

    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to="/" className='side-nav-links' activeclassname='active'>
                    <p>{t('leftSideBar.home')}</p> 
                </NavLink>
                <div className='side-nav-div'>
                    <div><p>{t('leftSideBar.public')}</p></div> 
                    <NavLink to='/Questions' className='side-nav-links' activeclassname='active'>
                        <img src={Globe} alt='Globe' width={18}/>
                        <p style={{ paddingLeft: "10px" }}>{t('leftSideBar.questions')}</p>
                    </NavLink>
                    <NavLink to="/Tags" style={{ paddingLeft: "40px" }} className='side-nav-links' activeclassname='active'>
                        <p>{t('leftSideBar.tags')}</p> 
                    </NavLink>
                    <NavLink to="/Users" style={{ paddingLeft: "40px" }} className='side-nav-links' activeclassname='active'>
                        <p>{t('leftSideBar.users')}</p> 
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default LeftSidebar;