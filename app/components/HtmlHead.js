import React from 'react';
import Head from 'next/head';

const HtmlHead = ({ title }) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{ title ? `${title} - ` : '' }Critarchy</title>
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
    <meta name="description" value="" />
    <meta name="theme-color" content="#fff" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
    <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
    <link rel="manifest" href="/static/manifest.json" />
    <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
  </Head>
);

HtmlHead.propTypes = {
  title: React.PropTypes.string,
};

export default HtmlHead;
