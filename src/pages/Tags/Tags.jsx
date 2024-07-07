import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import './Tags.css';
import TagsList from "./TagsList";
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';

const Tags = () => {
  const { t } = useTranslation('global');
  const tagsList = useSelector((state) => state.tagsListReducer);

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className="tags-h1">{t('tags.tagsTitle')}</h1>
        <p className="tags-p">{t('tags.tagsDescription1')}</p>
        <p className="tags-p">{t('tags.tagsDescription2')}</p>
        <div className="tags-list-container">
          {tagsList.length === 0 ? (
            <p>{t('tags.noTagsAvailable')}</p>
          ) : (
            tagsList.map((tag) => (
              <TagsList tag={tag} key={tag._id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Tags;