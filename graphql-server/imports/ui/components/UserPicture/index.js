import React from 'react';
import './style.css';

const UserPicture = ({ picture, size = 'normal' }) => (
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

UserPicture.propTypes = {
  picture: React.PropTypes.string.isRequired,
  size: React.PropTypes.string.isRequired,
};

export default UserPicture;
