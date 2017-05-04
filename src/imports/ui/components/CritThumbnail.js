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
    const { crit } = this.props;
    const { art } = crit;
    return (
      <div>
        <div>{crit.content}</div>
        <div>
          <div>
            <ThumbsUpIcon
              id={crit.id}
              /* TODO(diedra): Determine isLiked by checking if the current
               * user is in the critique's likedBy list.
               */
              isLiked={false}
            />
          </div>
          <Art image={art.image} alt={art.title} size="large" />
          <div className="artist-details">
            by
            <img src={art.createdBy.picture} alt="" width="24" height="24" />
            {art.createdBy.name}
          </div>
        </div>
        <style jsx>{`
          .artist-details {
            padding: .5rem;
            font-size: smaller;
            color: var(--textMinorColor);
          }
          .artist-details img {
            vertical-align: middle;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            margin: 0 4px;
          }
        `}</style>
      </div>
    );
  }
}
