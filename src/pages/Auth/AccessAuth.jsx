import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import './Auth.css';
import icon from '../../assets/icon.png';
import { accessAuth } from '../../actions/auth';

const AccessAuth = ({ setFirst }) => {
  const { t } = useTranslation('global');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(accessAuth({ email }, navigate, email, setFirst))
  };

  return (
    <section className='auth-section'>
      <div className='auth-container-2'>
        <img src={icon} alt='stack overflow' className='login-logo' width={50} />
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>
            <h4>{t('auth.email')}</h4>
            <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button type='submit' className='auth-btn'>{t('forgotPassword.getOTP')}</button>
        </form>
      </div>
    </section>
  );
};

export default AccessAuth;