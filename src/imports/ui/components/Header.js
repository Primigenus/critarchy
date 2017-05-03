import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInNav = (): HTMLUListElement => (
  <ul>
    <li><NavLink exact to="/" activeClassName="active">Latest</NavLink></li>
    <li>
      <NavLink to="/upload" className="upload-art" activeClassName="active">
        Upload
      </NavLink>
    </li>
    <li><NavLink to="/sketchbook" activeClassName="active">Sketchbook</NavLink></li>
    <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
  </ul>
);

const SignedOutNav = (): HTMLUListElement => (
  <ul>
    <li><NavLink to="/signin" activeClassName="active">Sign in</NavLink></li>
  </ul>
);

type UserDetails = {
  hasUser: boolean,
};

const Header = ({ hasUser }: UserDetails): HTMLHeaderElement => (
  <header className="main-header">
    <div className="logo"><NavLink to="/">Critarchy</NavLink></div>
    <nav className="main-nav">
      {hasUser ? <SignedInNav /> : <SignedOutNav />}
    </nav>
  </header>
);

export default Header;
