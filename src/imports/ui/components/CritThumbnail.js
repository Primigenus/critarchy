import React, { Component } from 'react';
import ThumbsUpIcon from '../components/icons/ThumbsUpIcon';
import Art from '../components/Art';

type User = {
  name: string,
  picture: ?string,
};

/*
 * Displays a single critique.
 */
export default class CritThumbnail extends Component {
  props: {
    /* TODO(diedra): Split this off into a separate object in a shared propTypes
     * file that can be reused in the propTypes of different components.
     */
    crit: {
      id: string,
      createdOn: number,
      createdBy: ?User,
      title: string,
      content: string,
      art: {
        title: string,
        createdBy: ?User,
        image: {
          thumb_large: string,
        },
      },
      thankedBy: Array<User>,
    },
    // Whether this crit should be initially rendered as expanded
    expanded: boolean,
  };

  static defaultProps = {
    // Critiques are expanded by default, but can be minimized by the user or
    // rendered minimized by its parent component if desired.
    expanded: true,
  };

  render(): HTMLDivElement {
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
