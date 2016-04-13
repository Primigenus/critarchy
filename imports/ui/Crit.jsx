import React, { Component, PropTypes } from 'react';



export default class Crit extends Component {
  render(){
    return (
      <li>{this.props.crit.content}</li>
    );
  }
}

Crit.propTypes = {
  crit: PropTypes.object.isRequired,
};
