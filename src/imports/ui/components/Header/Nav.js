import React from 'react';
import { NavLink } from 'react-router-dom';

type UserDetails = {
  hasUser: boolean,
};

const Nav = ({ hasUser }: UserDetails & Props): HTMLDivElement => (
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
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--primary);
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
        background-color: black;
        color: white;
        text-transform: uppercase;
        margin-top: -.5rem;
        padding-bottom: 1.5rem;
      }
    `}</style>
  </div>
);

export default Nav;
