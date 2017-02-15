import React from 'react';
import './style.css';

const UserPicture = ({ picture, size = 'normal' }) => (
  <img
    className="user-picture"
    src={ picture }
    alt=""
    style={ {
      width: size === 'large' ? 40 : 20,
      height: size === 'large' ? 40 : 20,
    } }
  />
);

export default UserPicture;
