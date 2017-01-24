import Link from 'next/link';
import React from 'react';

const signInLink = <Link href="/auth/sign-in"><a>Sign in</a></Link>;
const signOutLink = <Link href="/auth/sign-off"><a>Sign out</a></Link>;
const uploadLink = <Link href="/upload"><a>Upload art</a></Link>;

const Header = ({ currentUser, isAuthenticated }) => (
  <header>
    <Link href="/"><a>Critarchy</a></Link>
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
