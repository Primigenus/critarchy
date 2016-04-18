import React, { Component, PropTypes } from 'react';



export default class Art extends Component {
  render(){
    return (
      <li>
        <img src={this.props.art.image}></img>
        {this.props.art.author}
        {this.props.art.createdOn.toString()}
      </li>
    );
  }
}

Art.propTypes = {
  art: PropTypes.object.isRequired,
};
