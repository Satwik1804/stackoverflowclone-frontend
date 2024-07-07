import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
 
import './Auth.css';
import { validateotp } from '../../actions/auth'; 
import icon from '../../assets/icon.png';

const Valotp = ({ setFirst }) => {
  const { t } = useTranslation('global');
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOTPValidation = (e) => {
    e.preventDefault();
    dispatch(validateotp({ OTP: otp }, navigate, setFirst));
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

export default Valotp;