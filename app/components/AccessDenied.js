import React from 'react';
import Link from 'next/link';

export default () => (
  <div>
    <h1>Access denied</h1>
    <p>Please <Link href='/login'>log in</Link> to access this page.</p>
  </div>
);
