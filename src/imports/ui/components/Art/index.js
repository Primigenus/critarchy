import React from 'react';
import './style.css';

type Art = {
  image: {
    thumb_large: ?string,
    thumb_small: ?string,
  },
  alt: string,
  size: string,
};

const Art = ({ image, alt, size }: Art): HTMLDivElement => (
  <div className="art">
    <img
      src={size === 'large' ? image.thumb_large : image.thumb_small}
      alt={alt}
      className="art-image"
    />
  </div>
);

export default Art;
