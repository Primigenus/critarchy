import React from 'react';
import Helmet from 'react-helmet';

export default ({ children }) => (
  <Helmet defaultTitle="Critarchy" titleTemplate="%s - Critarchy">
    {children}
  </Helmet>
);
