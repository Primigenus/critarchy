import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

const uploadLink = <a href="/upload">Upload art</a>;

const Header = ({ hasUser, user }) => (
  <header>
    <a href="/">Critarchy</a>
    { hasUser && <span>logged in as { hasUser && user.name }</span> }
    <div>
      <Accounts.ui.LoginForm />
    </div>
    { hasUser && uploadLink }
  </header>
);

Header.propTypes = {
  hasUser: React.PropTypes.bool.isRequired,
  user: React.PropTypes.shape({
    createdAt: React.PropTypes.date,
  }),
};

export default Header;
