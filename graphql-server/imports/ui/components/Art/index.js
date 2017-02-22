import React, { PropTypes } from 'react';
import './style.css';

const Art = ({ image, alt, size }) => (
  <div className="art">
    <img
      src={ size === 'large' ? image.thumb_large : image.thumb_small }
      alt={ alt }
      className="art-image"
    />
  </div>
);

Art.propTypes = {
  image: PropTypes.shape({
    thumb_large: PropTypes.string,
    thumb_small: PropTypes.string,
  }),
  alt: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Art;
