import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Pages } from '../api/pages.js';

import Art from './Art.jsx';



class ArtList extends Component {
  renderArt(){
    return this.props.arts.map((art)=>(
      <Art key={art._id} art={art} />
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
  return {
    arts: Pages.find({}, {sort: {critsNum: -1}}).fetch()
  };
}, ArtList);
