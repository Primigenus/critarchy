import React from 'react';
import Link from 'next/prefetch';

export default () => (
  <div>
    <h1>Access denied</h1>
    <p>Please <Link href='/login'><a>log in</a></Link> to access this page.</p>
  </div>
);
