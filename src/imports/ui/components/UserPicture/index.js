import React from 'react';

type UserPicture = {
  picture: string,
  size: ?string,
};

const UserPicture = ({ picture, size = 'normal' }: UserPicture & Props): HTMLDivElement => (
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
