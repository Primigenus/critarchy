import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';

const uploadLink = <li><Link to="/upload">Upload art</Link></li>;
const sketchbookLink = <li><Link to="/sketchbook">Sketchbook</Link></li>;
const signinLink = <li><Link to="/signin">Sign in</Link></li>;

const Header = ({ hasUser, user }) => (
  <header>
    <Link to="/">Critarchy</Link>
    { hasUser && <span>logged in as { user.name }</span> }
    <nav>
      <ul>
        { hasUser && uploadLink }
        { hasUser && sketchbookLink }
        { !hasUser && signinLink }
      </ul>
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
