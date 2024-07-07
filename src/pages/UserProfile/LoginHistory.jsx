import React from 'react';
import { useTranslation } from 'react-i18next';

const LoginHistory = ({ currentUser, setHistory }) => {
  const { t } = useTranslation('global');

  return (
    <div>
      <h1 className="edit-profile-title">{t("loginHistory.yourLoginHistory")}</h1>
      <h2 className="edit-profile-title-2">{t("loginHistory.yourLoginInformation")}</h2>
      {currentUser?.result?.loginHistory?.length ? (
        <ul className="login-history-list">
          {currentUser.result.loginHistory.map((login, index) => (
            <div key={index} className="login-history-item">
              <p><strong>{t("loginHistory.loginTime")}:</strong> {new Date(login.loginTime).toLocaleString()}</p>
              <p><strong>{t("loginHistory.ipAddress")}:</strong> {login.ipAddress}</p>
              <p><strong>{t("loginHistory.browser")}:</strong> {login.browser}</p>
              <p><strong>{t("loginHistory.os")}:</strong> {login.os}</p>
              <p><strong>{t("loginHistory.device")}:</strong> {login.device}</p>
            </div>
          ))}
        </ul>
      ) : (
        <p>{t("loginHistory.noLoginHistory")}</p>
      )}
      <button
        type="button"
        className="user-cancel-btn"
        onClick={() => setHistory(false)}
      >
        {t("editProfileForm.cancel")}
      </button>
    </div>
  );
};

export default LoginHistory;