// @flow

import React from 'react';
import { Link } from 'react-router-dom';

type UserDetails = {
  hasUser: boolean,
};

const HomeBanner = ({ hasUser }: UserDetails) => (
  <div>
    <div role="banner" className="home-banner">
      <h1>An engine for helping artists improve</h1>
      <p>
        We believe getting better is about constant iteration and positive
        reinforcement, so rather than focus on the art, here we focus on sharing
        constructive feedback with one another.
      </p>
      <p>
        <Link to={hasUser ? '/upload' : '/signin'} className="button">Get started</Link>
      </p>
    </div>
    <style jsx>{`
      .home-banner {
        border-bottom: solid 1px var(--borderColor);
        padding: 2rem;
        margin-bottom: 2rem;
      }
      .home-banner h1 {
        font-size: 1.25rem;
        margin-top: 0;
      }
      .home-banner > *:last-child {
        margin-bottom: 0;
      }
    `}</style>
  </div>
);

export default HomeBanner;
