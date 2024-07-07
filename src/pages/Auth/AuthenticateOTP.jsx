import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { authenticateOTP } from '../../actions/auth'; 
import './Auth.css';
import icon from '../../assets/icon.png';
import { setCurrentLanguage } from '../../actions/currentLanguage';

const AuthenticateOTP = ({ setLanguage }) => {
  const { t, i18n } = useTranslation('global'); 
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.currentUserReducer);

  const handleOTPValidation = async (e) => {
    e.preventDefault();
    dispatch(authenticateOTP({ otp: otp, lang: User?.result?.lang }, navigate, setCurrentLanguage, setLanguage, i18n));
  };

  return (
    <section className='auth-section'>
      <div className='auth-container-2'>
        <img src={icon} alt='stack overflow' className='login-logo' width={50} />
        <form onSubmit={handleOTPValidation}>
          <label htmlFor='otp'>
            <h4>{t('validateOTP.otp')}</h4>
            <input type="text" name="otp" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} />
          </label>
          <button type='submit' className='auth-btn'>{t('validateOTP.validateOTP')}</button>
        </form>
      </div>
    </section>
  );
};

export default AuthenticateOTP;