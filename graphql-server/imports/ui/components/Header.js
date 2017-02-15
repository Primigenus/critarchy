import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';
import UserPicture from './UserPicture';

const Header = ({ hasUser, user }) => (
  <header className="main-header">
    <Link to="/" className="logo">Critarchy</Link>
    <nav className="main-nav">
      { hasUser ?
        <ul>
          <li><Link to="/upload" className="upload-art">Upload art</Link></li>
          <li><Link to="/sketchbook">Sketchbook</Link></li>
          <li><Link to="/profile">
            { user.name }
            <UserPicture picture={ user.picture } />
          </Link></li>
        </ul>
        :
        <ul>
          <li><Link to="/signin">Sign in</Link></li>
        </ul>
      }
    </nav>
  </header>
);

Header.propTypes = {
  hasUser: React.PropTypes.bool.isRequired,
  user: React.PropTypes.shape({
    createdAt: React.PropTypes.date,
  }),
};

export default Header;
