import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next'; 

import "./Auth.css";
import icon from "../../assets/icon.png";
import { forgotPasswordEmail, forgotPasswordSMS } from '../../actions/auth';

const ForgotPassword = () => {
    const { t } = useTranslation('global'); 
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [Switch, setSwitch] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOTP = (e) => {
        e.preventDefault();
        if(Switch) {
            dispatch(forgotPasswordEmail({ email }, navigate));
        } else {
            dispatch(forgotPasswordSMS({ phoneNumber }, navigate));
        }
    }

    return (
        <section className='auth-section'>
            <div className='auth-container-2'>
                <img src={icon} alt='stack overflow' className='login-logo' width={50} />
                <form>
                    {
                        Switch ? (
                            <label htmlFor='email'>
                                <h4>{t('auth.email')}</h4>
                                <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}} />
                            </label>
                        ) : (
                            <label htmlFor='phoneNumber'>
                                <h4>{t('auth.phoneNumber')}</h4>
                                <input type="text" name="phoneNumber" id="phoneNumber" onChange={(e) => {setPhoneNumber(e.target.value)}} />
                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn' onClick={handleOTP}>{t('forgotPassword.getOTP')}</button>
                </form>
                {
                    Switch ? (
                        <p>
                            {t('forgotPassword.getOTPThrough')}
                            <button type='button' className='handle-switch-btn' onClick={() => setSwitch(false)}>{t('auth.phoneNumber')}</button>
                        </p>
                    ) : (
                        <p>
                            {t('forgotPassword.getOTPThrough')}
                            <button type='button' className='handle-switch-btn' onClick={() => setSwitch(true)}>{t('auth.email')}</button>
                        </p>
                    )
                }
            </div>
        </section>
    );
}

export default ForgotPassword;