import React from 'react';

export default class ThumbsUpIcon extends React.Component {
  static defaultProps = {
    height: "24",
    width: "24",
  }

  state = {
    isLiked: this.props.isLiked,
  }

  /*
   * Likes or unlikes the related item for the current user depending on
   * whether they've currently liked it or not.
   */
  handleClick() {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  }

  render() {
    const fillColor = this.state.isLiked ? "#00BCD4" : "#000000";

    return (
      <svg
        fill={fillColor}
        height={this.props.height}
        viewBox="0 0 24 24"
        width={this.props.width}
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => this.handleClick()}
      >
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
      </svg>
    );
  }
}

ThumbsUpIcon.propTypes = {
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  // The id of the item this icon is related to
  id: React.PropTypes.string.isRequired,
  // Whether the item this icon is related to has already been liked
  isLiked: React.PropTypes.bool.isRequired,
};
