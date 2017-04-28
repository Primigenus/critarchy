import React from 'react';
import PropTypes from 'prop-types';
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
  picture: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default UserPicture;
