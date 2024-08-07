import React from "react";
import { useTranslation } from "react-i18next";

const ProfileBio = ({ currentProfile }) => {
  const { t } = useTranslation('global'); 

  return (
    <div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>{t("profileBio.tagsWatched")}</h4>
            {currentProfile?.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </>
        ) : (
          <p>{t("profileBio.noTagsWatched")}</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4>{t("profileBio.about")}</h4>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p>{t("profileBio.noBioFound")}</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;