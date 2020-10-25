import React from 'react';
import { Icon } from 'semantic-ui-react';
import { map } from 'lodash';
import { socialMedia } from '../../data/data';
import "./SocialMedia.scss"

const SocialMedia = () => {
  console.log(socialMedia);
  return (
    <div className="social-media">
      {map(socialMedia, (social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon circular link name={social.name} className={social.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
