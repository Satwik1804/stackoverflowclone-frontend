import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next'; 

import "./Auth.css";
import icon from "../../assets/icon.png";
import { setNewPassword } from '../../actions/auth';

const SetNewPassword = () => {
    const { t } = useTranslation('global'); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlePassword = (e) => {
        e.preventDefault();
        dispatch(setNewPassword({ email, password }, navigate));
    }

    return (
        <section className='auth-section'>
            <div className='auth-container-2'>
                <img src={icon} alt='stack overflow' className='login-logo' width={50} />
                <form>
                    <label htmlFor='email'>
                        <h4>{t('setNewPassword.email')}</h4>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor='password'>
                        <h4>{t('setNewPassword.password')}</h4>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type='submit' className='auth-btn' onClick={handlePassword}>{t('setNewPassword.changePassword')}</button>
                </form>
            </div>
        </section>
    );
}

export default SetNewPassword;