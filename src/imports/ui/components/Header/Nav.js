// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';

type UserDetails = {
  hasUser: boolean,
};

const Nav = ({ hasUser }: UserDetails) =>
  <div>
    <nav className="main-nav">
      {hasUser
        ? <ul>
            <li>
              <NavLink exact to="/" className="nav-link">
                Latest
              </NavLink>
            </li>
            <li>
              <NavLink to="/upload" className="nav-link">
                Upload
              </NavLink>
            </li>
            <li>
              <NavLink to="/sketchbook" className="nav-link">
                Sketchbook
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
            </li>
          </ul>
        : <ul>
            <li>
              <NavLink to="/signin" className="nav-link">Sign in</NavLink>
            </li>
          </ul>}
    </nav>
    <style jsx>{`
      .main-nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        z-index: 999999;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--primary);
        -webkit-backdrop-filter: blur(10px);
      }
      ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        border-top: solid 1px var(--greyDark);
      }
      li {
        display: inline-block;
        flex: 1;
      }
      li :global(.nav-link) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        text-decoration: none;
        color: var(--textColor);
      }
      li :global(.active) {
        font-weight: bold;
      }
    `}</style>
  </div>;

export default Nav;
