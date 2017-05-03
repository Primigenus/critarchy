import React from 'react';
import './style.css';

type UserPicture = {
  picture: string,
  size: ?string,
};

const UserPicture = ({ picture, size = 'normal' }: UserPicture): HTMLDivElement => (
  <div className="user-picture">
    <img
      className="user-picture-img"
      src={picture}
      alt=""
      style={{
        width: size === 'large' ? 40 : 20,
        height: size === 'large' ? 40 : 20,
      }}
    />
  </div>
);

export default UserPicture;
