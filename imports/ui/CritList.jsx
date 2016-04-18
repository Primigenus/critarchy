import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Crits } from '../api/crits.js';

import Crit from './Crit.jsx';



class CritList extends Component {
  renderCrits(){
    return this.props.crits.map((crit)=>(
      <Crit key={crit._id} crit={crit} />
    ));
  }

  render(){
    return (
      <div className="container">
        <h1>Top Crits</h1>

        <ul>
          {this.renderCrits()}
        </ul>
      </div>
    );
  }
}


CritList.propTypes = {
  crits: PropTypes.array.isRequired
};


export default createContainer(()=>{
  let query = {};
  if (FlowRouter.getParam('username')) query.author = FlowRouter.getParam('username');
  return {
    crits: Crits.find(query, {sort: {likesNum: -1}}).fetch()
  };
}, CritList);
