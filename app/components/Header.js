import React from 'react';

const Header = ({ currentUser, isAuthenticated }) => (
  <header>
    { isAuthenticated
      ? <span>logged in as { currentUser.given_name }</span>
      : <span />
    }
  </header>
);

Header.propTypes = {
  currentUser: React.PropTypes.shape({
    // TODO
  }).isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
};

export default Header;
