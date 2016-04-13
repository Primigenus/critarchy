import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Crits } from '../api/crits.js';
import { Pages } from '../api/pages.js';

import Crit from './Crit.jsx';
import Art from './Art.jsx';



class Home extends Component {
  renderCrits(){
    return this.props.crits.map((crit)=>(
      <Crit key={crit._id} crit={crit} />
    ));
  }

  renderArt(){
    return this.props.arts.map((art)=>(
      <Art key={art._id} art={art} />
    ));
  }

  render(){
    return (
      <div className="container">
        <h1>Top Crits</h1>

        <ul>
          {this.renderCrits()}
        </ul>

        <h1>Recent Art</h1>

        <ul>
          {this.renderArt()}
        </ul>
      </div>
    );
  }
}


Home.propTypes = {
  crits: PropTypes.array.isRequired,
  arts: PropTypes.array.isRequired,
};


export default createContainer(()=>{
  return {
    crits: Crits.find({}).fetch(),
    arts: Pages.find({}).fetch(),
  };
}, Home);
