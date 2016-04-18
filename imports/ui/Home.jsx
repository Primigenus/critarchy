import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import CritList from './CritList.jsx';
import ArtList from './ArtList.jsx';



export default class Home extends Component {
  render(){
    return (
      <div className="container">
        <CritList />
        <a href="/crits">More Crits</a>

        <ArtList />
        <a href="/art">More Art</a>
      </div>
    );
  }
}
