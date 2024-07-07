import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import "./Navbar.css";
import logo from '../../assets/logo.png';
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import { fetchAllUsers } from '../../actions/users';
import { fetchAllQuestions } from '../../actions/question';
import { setCurrentUser } from '../../actions/currentUser';
import { getAllTags, getTagsList } from '../../actions/tags';
import { authenticateEmail, authenticateSMS } from '../../actions/auth';
import { setCurrentLanguage } from '../../actions/currentLanguage';

function Navbar({ language, setLanguage }) {
    const { t, i18n } = useTranslation('global');
    const User = useSelector((state) => state.currentUserReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    useEffect(() => {
        const token = User?.token;
        if (token) {
            const decodeToken = jwtDecode(token);
            if (decodeToken.exp * 1000 < new Date().getTime()) {
                handleLogout();
            }
        }
    }, [User]);

    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem('Profile'));
        if (storedProfile) {
            dispatch(setCurrentUser(storedProfile));
        }  
    }, [dispatch]);

    const handleLogout = () => {
        localStorage.removeItem('Profile'); 
        dispatch({ type: 'LOGOUT' }); 
        dispatch(setCurrentUser(null)); 
        dispatch(setCurrentLanguage(null));
        dispatch(getAllTags("en"));
        dispatch(getTagsList("en"));
        dispatch(fetchAllQuestions("en"));
        dispatch(fetchAllUsers("en"));
        i18n.changeLanguage("en");
        document.body.style.backgroundColor = "white";
        navigate("/"); 
    };
    const changeLanguage = async (lng) => {
        try {
            if (lng === "fr") {
                dispatch(authenticateEmail({ email: User?.result?.email }, navigate));
            } else {
                dispatch(authenticateSMS({ phoneNumber: User?.result?.phoneNumber }, navigate));
            }
            const updatedUser = { ...User.result, lang: lng }; 
            dispatch(setCurrentUser({ ...User, result: updatedUser }));
            localStorage.setItem('Profile', JSON.stringify({ ...User, result: updatedUser }));
        } catch (error) {
            console.error("Authentication failed:", error);
        }
    };

    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt="logo" height={28} />
                </Link>
                <Link to="/" className='nav-item nav-btn'>{t('navbar.about')}</Link>
                <Link to="/" className='nav-item nav-btn'>{t('navbar.products')}</Link>
                <Link to="/" className='nav-item nav-btn'>{t('navbar.forTeams')}</Link>
                <form>
                    <input type="text" placeholder={t('navbar.searchPlaceholder')} />
                    <img src={search} alt="search" width={18} className='search-icon' />
                </form>
                {User && (
                    <div className='nav-item'>
                        <select onChange={(e) => changeLanguage(e.target.value)} value={language || "en"}>
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="hi">हिन्दी</option>
                            <option value="pt">Português</option>
                            <option value="zh">中文</option>
                            <option value="fr">Français</option>
                        </select>
                    </div>
                )}
                {User === null ? (
                    <Link to='/Auth' className='nav-item nav-links'>{t('navbar.login')}</Link>
                ) : (
                    <>
                        <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white">
                            <Link to={`/Users/${User?.result?._id}`} style={{ color: "white", textDecoration: "none" }}>
                                {User.result.name.charAt(0).toUpperCase()}
                            </Link>
                        </Avatar>
                        <button className='nav-item nav-link' onClick={handleLogout}>{t('navbar.logout')}</button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;