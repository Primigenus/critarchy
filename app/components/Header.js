import Link from 'next/link';
import React from 'react';

const signInLink = <Link href="/auth/sign-in">Sign in</Link>;
const signOutLink = <Link href="/auth/sign-out">Sign out</Link>;

export default ({ isAuthenticated }) => (
  <header>
    <span>Critarchy</span>
    {isAuthenticated ? signOutLink : signInLink}
  </header>
);
