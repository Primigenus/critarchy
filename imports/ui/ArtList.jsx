import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Pages } from '../api/pages.js';

import ArtSummary from './ArtSummary.jsx';



class ArtList extends Component {
  renderArt(){
    return this.props.arts.map((art)=>(
      <ArtSummary key={art._id} art={art} />
    ));
  }

  render(){
    return (
      <div className="container">
        <h1>Recent Art</h1>

        <ul>
          {this.renderArt()}
        </ul>
      </div>
    );
  }
}


ArtList.propTypes = {
  arts: PropTypes.array.isRequired
};


export default createContainer(()=>{
  let query = {};
  if (FlowRouter.getParam('username')) query.author = FlowRouter.getParam('username');
  return {
    arts: Pages.find(query, {sort: {critsNum: -1}}).fetch()
  };
}, ArtList);
