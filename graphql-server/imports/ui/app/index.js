import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Header from '../components/Header';

import '../style/global.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header {...this.props} {...this.state} />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

App.propTypes = { children: PropTypes.element };

export default withRouter(App);
