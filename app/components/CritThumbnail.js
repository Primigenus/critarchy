import React from 'react';
import ThumbsUpIcon from '../components/icons/ThumbsUpIcon';

/*
 * Displays a single critique.
 */
export default class CritThumbnail extends React.Component {
  static defaultProps = {
    // Critiques are expanded by default, but can be minimized by the user or
    // rendered minimized by its parent component if desired.
    expanded: true,
  }

  render() {
    return (
      <div>
        <div>{this.props.crit.content}</div>
        <div>
          <div>
            <ThumbsUpIcon
              id={ this.props.crit.id }
              /* TODO(diedra): Determine isLiked by checking if the current
               * user is in the critique's likedBy list.
               */
              isLiked={ false }
            />
          </div>
          <img
            src={ this.props.crit.art.image.thumb_large }
            alt={ this.props.crit.art.title } /* TODO: improve alt description */
          />
          <br />
          by { this.props.crit.art.createdBy.name }
        </div>
      </div>
    );
  }
}

CritThumbnail.propTypes = {
  /* TODO(diedra): Split this off into a separate object in a shared propTypes
   * file that can be reused in the propTypes of different components.
   */
  crit: React.PropTypes.shape({
    // The date the critique was created in miliseconds
    id: React.PropTypes.string.isRequired,
    createdOn: React.PropTypes.number.isRequired,
    createdBy: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      // URL to the avatar of the user that created this critique
      picture: React.PropTypes.string.isRequired,
    }),
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    art: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      createdBy: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        // URL to the avatar of the user that created this critique
        picture: React.PropTypes.string.isRequired,
      }),
      // URL to the image for the art that this critique is for
      image: React.PropTypes.shape({
        thumb_large: React.PropTypes.string.isRequired,
      }),
    }),
    thankedBy: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        // URL to the avatar of the user that thanked this critique
        picture: React.PropTypes.string.isRequired,
      }),
    ),
  }),
  // Whether this crit should be initially rendered as expanded
  expanded: React.PropTypes.bool,
};
