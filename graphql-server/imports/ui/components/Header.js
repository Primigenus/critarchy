import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';

const Header = ({ hasUser, user }) => (
  <header>
    <Link to="/">Critarchy</Link>
    { hasUser && <span>logged in as { user.name }</span> }
    <nav>
      { hasUser ?
        <ul>
          <li><Link to="/upload">Upload art</Link></li>
          <li><Link to="/sketchbook">Sketchbook</Link></li>
          <li><Link to="/profile">Profile</Link></li>
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
