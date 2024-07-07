import React from 'react';
import { useTranslation } from 'react-i18next';

import './Auth.css';

function AboutAuth() {
  const { t } = useTranslation('global');

  return (
    <div className='auth-container-1'>
      <h1>{t('aboutAuth.joinCommunity')}</h1>
      <p>{t('aboutAuth.getUnstuck')}</p>
      <p>{t('aboutAuth.unlockPrivileges')}</p>
      <p>{t('aboutAuth.saveFavorites')}</p>
      <p style={{ fontSize: '13px', color: '#666767' }}>{t('aboutAuth.collaborateShare')}</p>
      <p style={{ fontSize: '13px', color: '#007ac6' }}>{t('aboutAuth.getFree')}</p>
    </div>
  );
}

export default AboutAuth;