import React from 'react';

type Art = {
  image: {
    thumb_large: ?string,
    thumb_small: ?string,
  },
  alt: string,
  size: string,
};

const Art = ({ image, alt, size }: Art & Props): HTMLDivElement => (
  <div className="art">
    <img
      src={size === 'large' ? image.thumb_large : image.thumb_small}
      alt={alt}
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
