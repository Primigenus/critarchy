import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Crits } from '../api/crits.js';

import Crit from './Crit.jsx';



class Home extends Component {
  renderCrits(){
    console.log(this.props);
    return this.props.crits.map((crit)=>(
      <Crit key={crit._id} crit={crit} />
    ));
  }

  render(){
    return (
      <div className="container">
        <h1>Crits</h1>

        <ul>
          {this.renderCrits()}
        </ul>
      </div>
    );
  }
}


Home.propTypes = {
  crits: PropTypes.array.isRequired,
};


export default createContainer(()=>{
  return {
    crits: Crits.find({}).fetch(),
  };
}, Home);
