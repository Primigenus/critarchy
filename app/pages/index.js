import React from 'react';
import Link from 'next/link';
import layout from '../hocs/layout';
import apollo from '../hocs/apollo';
import gql from 'graphql-tag';
import 'isomorphic-fetch';
import ThumbsUpIcon from '../components/icons/ThumbsUpIcon';

/*
 * Displays a single critique.
 */
class CritThumbnail extends React.Component {
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
              id={this.props.crit.id}
              /* TODO(diedra): Determine isLiked by checking if the current user is
               * in the critique's likedBy list.
               */
              isLiked={false}
            />
          </div>
          <img src={this.props.crit.art.image}></img>
        </div>
      </div>
    );
  }
};

CritThumbnail.propTypes = {
  /* TODO(diedra): Split this off into a separate object in a shared propTypes
   * file that can be reused in the propTypes of different components.
   */
  crit: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    // The date the critique was created in miliseconds
    createdOn: React.PropTypes.number.isRequired,
    createdBy: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      // URL to the avatar of the user that created this critique
      avatar: React.PropTypes.string.isRequired,
    }),
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    art: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      // URL to the image for the art that this critique is for
      image: React.PropTypes.string.isRequired,
    }),
    thankedBy: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        // URL to the avatar of the user that thanked this critique
        avatar: React.PropTypes.string.isRequired,
      })
    ),
  }),
  // Whether this crit should be initially rendered as expanded
  expanded: React.PropTypes.bool,
};

/*
 * Renders a list of critiques.
 * The list is expected to already be sorted in the desired way.
 */
class CritThumbnailList extends React.Component {
  static defaultProps = {
    crits: [],
    // Critiques are expanded by default, but can be minimized by the user or
    // rendered minimized by its parent component if desired.
    critsAreExpanded: true,
  }

  render() {
    return (
      <div>
        {this.props.crits.map((crit) => (
          <CritThumbnail
            crit={crit}
            expanded={this.props.critsAreExpanded}
            key={crit.id}
          />
        ))}
      </div>
    );
  }
};

CritThumbnailList.propTypes = {
  crits: React.PropTypes.arrayOf(CritThumbnail.propTypes.crit),
  critsAreExpanded: React.PropTypes.bool,
};

/* TODO(diedra): Consider moving queries to a shared file so it's easy to
 * query the same data from multiple places. (Crits in particular will
 * probably be queried in a few places uses the same or very similar queries.)
 */
const query = gql`
  query testQuery {
    newestCrits {
      id
      createdOn
      createdBy {
        id
        name
        avatar
      }
      title
      content
      art {
        id
        title
        image
      }
      thankedBy {
        id
        name
        avatar
      }
    }
  }
`;

export default class Home extends React.Component {
  static async getInitialProps() {
    const result = await apollo.query({query});
    return await apollo.query({query});
  }

  static defaultProps = {
    data: {
      newestCrits: [],
      leastCrittedArt: [],
      mostThankedCrits: [],
    }
  }

  render() {
    const { isAuthenticated } = this.props;
    console.log("render this.props = ", this.props);
    return (
      <div>
        <div>
          <CritThumbnailList
            crits={this.props.data.newestCrits}
            critsAreExpanded={false}
          />
        </div>

        {/* TODO(diedra): Update this to be least-critted art of the last two
          * weeks here when we have art going back far enough that they're
          * outdated.
          */}
        <div>Least-critted art of all time will go here</div>

        {/* TODO(diedra): Put top-thanked crits of last month here when there
          * are crits going back far enough that this would be useful.
          */}

        {/* <div>Top-thanked crits of all time will go here</div> */}
      </div>
    );
  }
};
