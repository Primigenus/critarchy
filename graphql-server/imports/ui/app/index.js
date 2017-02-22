import React from 'react';
import { withRouter } from 'react-router';
import Header from '../components/Header';

import '../style/global.css';

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

export default withRouter(App);
