import React from 'react';

type ThumbLarge = { thumb_large?: string };
type ThumbSmall = { thumb_small?: string };

type Art = {
  image: ThumbLarge & ThumbSmall,
  alt?: string,
  size?: string,
};

const Art = ({ image, alt, size }: Art & Props): HTMLDivElement => (
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
