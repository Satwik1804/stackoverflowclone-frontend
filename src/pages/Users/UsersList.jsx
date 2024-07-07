// import React from "react";
// import { useSelector } from "react-redux";

// import User from "./User";
// import "./Users.css";

// const UsersList = () => {
//   const users = useSelector((state) => state.usersReducer);

//   return (
//     <div className="user-list-container">
//       {users.length === 0 ? (
//         <p>{t('tags.noTagsAvailable')}</p> : (
//           users.map((user) => (
//         <User user={user} key={user?._id} /> )
//       ))
//       )}
//     </div>
//   );
// };

// export default UsersList;

import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next"; 

import User from "./User";
import "./Users.css";

const UsersList = () => {
  const { t } = useTranslation("global");
  const users = useSelector((state) => state.usersReducer || []); 

  return (
    <div className="user-list-container">
      {users.length === 0 ? (
        <p>{t('users.noUsersAvailable')}</p> 
      ) : (
        users.map((user) => (
          <User user={user} key={user._id} /> 
        ))
      )}
    </div>
  );
};

export default UsersList;