import React from 'react';
import Link from 'next/link';
import layout from '../hocs/layout';

export default layout('', ({ isAuthenticated }) => (
  <div>
    { !isAuthenticated && (
      <p>
        You‘re not authenticated yet.
        Maybe you want to <Link href="/auth/sign-in">Sign in</Link>
        and see what happens?
      </p>
    )}
    { isAuthenticated && (
      <p>
        Now that you‘re authenticated, maybe you should try <Link href="/upload">uploading some art</Link>!
        Or <Link href="/auth/sign-off">Log out</Link>
      </p>
    )}

  </div>
));
