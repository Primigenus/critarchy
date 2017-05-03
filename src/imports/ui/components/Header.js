import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SignedInNav = () => (
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

const SignedOutNav = () => (
  <ul>
    <li><NavLink to="/signin" activeClassName="active">Sign in</NavLink></li>
  </ul>
);

const Header = ({ hasUser }) => (
  <header className="main-header">
    <div className="logo"><NavLink to="/">Critarchy</NavLink></div>
    <nav className="main-nav">
      {hasUser ? <SignedInNav /> : <SignedOutNav />}
    </nav>
  </header>
);

Header.propTypes = { hasUser: PropTypes.bool.isRequired };

export default Header;
