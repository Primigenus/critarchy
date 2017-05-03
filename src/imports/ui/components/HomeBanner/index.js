import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = (): HTMLDivElement => (
  <div>
    <div role="banner" className="home-banner">
      <h1>A community of critiques</h1>
      <p>Critarchy is an engine for helping artists improve.</p>
      <p>
        We believe getting better is about constant iteration and positive
        reinforcement, so rather than focus on the art, here we focus on sharing
        constructive feedback with one another.
      </p>
      <p><Link to="/signin">Get started</Link></p>
    </div>
    <style jsx>{`
      .home-banner {
        background-color: #eee;
        padding: 2rem;
      }
      .home-banner h1 {
        font-size: 1.25rem;
        margin-top: 0;
      }
    `}</style>
  </div>
);

export default HomeBanner;
