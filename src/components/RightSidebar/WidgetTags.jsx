import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import './RightSidebar.css'; 

const WidgetTags = () => {
  const { t } = useTranslation('global'); 
  const tags = useSelector((state) => state.tagsReducer);

  return (
    <div className="widget-tags">
      <h4>{t('tags.tagsTitle')}</h4>
      <div className="widget-tags-div">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <p key={tag._id}>{tag.tagName}</p>
          ))
        ) : (
          <p>{t('tags.noTagsAvailable')}</p> 
        )}
      </div>
    </div>
  );
}

export default WidgetTags;