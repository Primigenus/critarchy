import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import withUser from '../hocs/withUser';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header { ...this.props } { ...this.state } />
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element,
};

export default withRouter(withUser(App));
