import React from "react";
import { useTranslation } from "react-i18next";

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = () => {
  const { t } = useTranslation('global');

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>{t("users.title")}</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;