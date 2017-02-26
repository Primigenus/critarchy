import { Meteor } from 'meteor/meteor';
import React from 'react';
import { IndexLink, Link } from 'react-router';

const Header = ({ hasUser }) => (
  <header className="main-header">
    <div className="logo"><Link to="/">Critarchy</Link></div>
    <nav className="main-nav">
      { hasUser ?
        <ul>
          <li><IndexLink to="/" activeClassName="active">Latest</IndexLink></li>
          <li><Link to="/upload" className="upload-art" activeClassName="active">Upload</Link></li>
          <li><Link to="/sketchbook" activeClassName="active">Sketchbook</Link></li>
          <li><Link to="/profile" activeClassName="active">Profile</Link></li>
        </ul>
        :
        <ul>
          <li><Link to="/signin" activeClassName="active">Sign in</Link></li>
        </ul>
      }
    </nav>
  </header>
);

Header.propTypes = {
  hasUser: React.PropTypes.bool.isRequired,
};

export default Header;
