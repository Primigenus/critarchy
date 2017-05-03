import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = (): HTMLDivElement => (
  <div className="logo">
    <NavLink to="/" className="logo-link">Critarchy</NavLink>
    <style jsx>{`
      .logo {
        display: block;
        margin: 0 auto;
      }
      .logo :global(.logo-link) {
        text-transform: uppercase;
        font-weight: 800;
        font-size: 1.25rem;
        letter-spacing: -1px;
        text-decoration: none;
        color: var(--textColor);
      }
    `}</style>
  </div>
);

export default Logo;
