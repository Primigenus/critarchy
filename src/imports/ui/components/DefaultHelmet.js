// @flow

import React from 'react';
import Helmet from 'react-helmet';

export default ({ children }: { children?: any }) => (
  <Helmet defaultTitle="Critarchy" titleTemplate="%s - Critarchy">
    {children}
  </Helmet>
);
