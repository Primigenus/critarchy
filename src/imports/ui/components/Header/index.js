import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Nav from './Nav';

type UserDetails = {
  hasUser: boolean,
};

const Header = ({ hasUser }: UserDetails & Props): HTMLHeaderElement => (
  <header className="main-header">
    <Logo />
    <Nav hasUser={hasUser} />
    <style jsx>{`
      .main-header {
        background-color: var(--primary);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: solid 2px var(--shadowColor);
      }
    `}</style>
  </header>
);

export default Header;
