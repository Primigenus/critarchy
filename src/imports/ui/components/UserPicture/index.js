// @flow

import React from 'react';
import type { Picture } from '../../../flowtypes/types';

const UserPicture = ({ picture, size = 'normal' }: Picture) => (
  <div>
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
    <style jsx>{`
      .user-picture {
        display: inline;
      }
      .user-picture-img {
        border-radius: 50%;
        vertical-align: bottom;
        margin-left: 4px;
      }
    `}</style>
  </div>
);

export default UserPicture;
