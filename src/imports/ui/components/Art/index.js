// @flow

import React from 'react';
import type { Artwork } from '../../../flowtypes/types';

const Art = ({ image, alt, size }: Artwork) => (
  <div className="art">
    <img
      src={size === 'large' ? image.thumb_large : image.thumb_small}
      alt={alt ? alt : ''}
      className="art-image"
    />
    <style jsx>{`
      .art-image {
        max-width: 100vw;
      }
    `}</style>
  </div>
);

export default Art;
