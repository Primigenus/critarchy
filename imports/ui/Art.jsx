import React, { Component, PropTypes } from 'react';



export default class Art extends Component {
  render(){
    return (
      <li><img src={this.props.art.image}></img></li>
    );
  }
}

Art.propTypes = {
  art: PropTypes.object.isRequired,
};
