import React, { Component, PropTypes } from 'react';



export default class Crit extends Component {
  render(){
    return (
      <li>{this.props.crit.content}</li>
    );
  }
}

Crit.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  crit: PropTypes.object.isRequired,
};
