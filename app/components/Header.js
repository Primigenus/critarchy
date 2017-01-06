import Link from 'next/link';
import React from 'react';

const signInLink = <Link href="/auth/sign-in">Sign in</Link>;
const signOutLink = <Link href="/auth/sign-off">Sign out</Link>;
const uploadLink = <Link href="/upload">Upload art</Link>;

const Header = ({ currentUser, isAuthenticated }) => (
  <header>
    <Link href="/">Critarchy</Link>
    { isAuthenticated && <span>logged in as { currentUser.given_name }</span> }
    { isAuthenticated ? signOutLink : signInLink }
    { isAuthenticated && uploadLink }
  </header>
);

Header.propTypes = {
  currentUser: React.PropTypes.shape({
    // TODO
  }),
  isAuthenticated: React.PropTypes.bool.isRequired,
};

export default Header;
