import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HomeBanner = () => (
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
);

export default HomeBanner;
