import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThumbsUpIcon from '../components/icons/ThumbsUpIcon';
import Art from '../components/Art';

const userShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
});

/*
 * Displays a single critique.
 */
export default class CritThumbnail extends Component {
  static propTypes = {
    /* TODO(diedra): Split this off into a separate object in a shared propTypes
     * file that can be reused in the propTypes of different components.
     */
    crit: PropTypes.shape({
      id: PropTypes.string.isRequired,
      createdOn: PropTypes.number.isRequired,
      createdBy: userShape,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      art: PropTypes.shape({
        title: PropTypes.string.isRequired,
        createdBy: userShape,
        image: PropTypes.shape({
          thumb_large: PropTypes.string.isRequired,
        }),
      }),
      thankedBy: PropTypes.arrayOf(userShape),
    }),
    // Whether this crit should be initially rendered as expanded
    expanded: PropTypes.bool,
  };

  static defaultProps = {
    // Critiques are expanded by default, but can be minimized by the user or
    // rendered minimized by its parent component if desired.
    expanded: true,
  };

  render() {
    return (
      <div>
        <div>{this.props.crit.content}</div>
        <div>
          <div>
            <ThumbsUpIcon
              id={this.props.crit.id}
              /* TODO(diedra): Determine isLiked by checking if the current
               * user is in the critique's likedBy list.
               */
              isLiked={false}
            />
          </div>
          <Art image={this.props.crit.art.image} alt={this.props.crit.art.title} size="large" />
          <br />
          by{' '}
          <img src={this.props.crit.art.createdBy.picture} alt="" width="40" height="40" />
          {this.props.crit.art.createdBy.name}
        </div>
      </div>
    );
  }
}
