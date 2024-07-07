import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Auth.css';
import icon from "../../assets/icon.png";
import AboutAuth from './AboutAuth';
import { signup, login } from '../../actions/auth';

function Auth({ setLanguage }) {
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation('global');

    function handleSwitch() {
        setIsSignup(!isSignup);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email && !password) {
            alert(t('auth.enterEmailAndPassword'));
            return;
        }
        if (isSignup) {
            if (!name) {
                alert(t('auth.enterName'));
                return;
            }
            if (!phoneNumber) {
                alert(t('auth.enterPhoneNumber'));
                return;
            }
            dispatch(signup({ name, email, password, phoneNumber }, navigate));
        } else {
            dispatch(login({ email, password }, navigate, setLanguage));
        }
    }

    return (
        <section className='auth-section'>
            {isSignup && <AboutAuth />}
            <div className='auth-container-2'>
                {!isSignup && <img src={icon} alt='stack overflow' className='login-logo' width={50} />}
                <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <label htmlFor='name'>
                            <h4>{t('auth.displayName')}</h4>
                            <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} />
                        </label>
                    )}
                    <label htmlFor='email'>
                        <h4>{t('auth.email')}</h4>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    {isSignup && (
                        <label htmlFor='phoneNumber'>
                            <h4>{t('auth.phoneNumber')}</h4>
                            <input type="text" name="phoneNumber" id="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />
                        </label>
                    )}
                    <label htmlFor='password'>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h4>{t('auth.password')}</h4>
                            {!isSignup && <p style={{ color: "#007ac6", fontSize: "13px", margin: "3px", cursor: "pointer" }} onClick={() => navigate("/ForgotPassword")}>{t('auth.forgotPassword')}</p>}
                        </div>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                        {isSignup && <p>{t('auth.passwordRequirements')}</p>}
                    </label>
                    {isSignup && (
                        <label htmlFor='check' className='check-label'>
                            <input type='checkbox' id='check' />
                            <p>{t('auth.optInMessage')}</p>
                        </label>
                    )}
                    <button type='submit' className='auth-btn'>{isSignup ? t('auth.signUp') : t('auth.login')}</button>
                    {isSignup && (
                        <p style={{ color: "#666767", fontSize: "13px" }}>
                            {t('auth.signUpAgreement')}
                        </p>
                    )}
                </form>
                <p>
                    {isSignup ? t('auth.alreadyHaveAccount') : t('auth.dontHaveAccount')}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? t('auth.login') : t('auth.signUp')}</button>
                </p>
            </div>
        </section>
    );
}

export default Auth;