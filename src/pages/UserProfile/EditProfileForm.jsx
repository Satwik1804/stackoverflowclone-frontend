import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { updateProfile } from "../../actions/users";

const EditProfileForm = ({ currentUser, setSwitch }) => {
  const { t } = useTranslation('global'); 

  const [name, setName] = useState(currentUser?.result?.name);
  const [about, setAbout] = useState(currentUser?.result?.about);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags.length === 0) {
      dispatch(updateProfile(currentUser?.result?._id, { name, about, tags: currentUser?.result?.tags }));
    } else {
      dispatch(updateProfile(currentUser?.result?._id, { name, about, tags }));
    }
    setSwitch(false);
  };

  return (
    <div>
      <h1 className="edit-profile-title">{t("editProfileForm.editProfileTitle")}</h1>
      <h2 className="edit-profile-title-2">{t("editProfileForm.publicInformation")}</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>{t("editProfileForm.displayName")}</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>{t("editProfileForm.aboutMe")}</h3>
          <textarea
            id="about"
            cols="30"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="tags">
          <h3>{t("editProfileForm.watchedTags")}</h3>
          <p>{t("editProfileForm.addTagsPrompt")}</p>
          <input
            type="text"
            id="tags"
            onChange={(e) => setTags(e.target.value.split(" "))}
          />
        </label>
        <br />
        <input type="submit" value={t("editProfileForm.saveProfile")} className="user-submit-btn" />
        <button
          type="button"
          className="user-cancel-btn"
          onClick={() => setSwitch(false)}
        >
          {t("editProfileForm.cancel")}
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;