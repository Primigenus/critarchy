import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CritThumbnailList from '../components/CritThumbnailList';

/* TODO(diedra): Consider moving queries to a shared file so it's easy to
 * query the same data from multiple places. (Crits in particular will
 * probably be queried in a few places uses the same or very similar queries.)
 */
const query = gql`
  query {
    newestCrits(limit: 10) {
      id
      createdOn
      createdBy {
        name
        picture
      }
      title
      content
      art {
        createdBy {
          name
        }
        title
        image {
          thumb_large
        }
      }
      thankedBy {
        name
        picture
      }
    }
  }
`;

class Home extends React.Component {
  static defaultProps = {
    data: {
      newestCrits: [],
      leastCrittedArt: [],
      mostThankedCrits: [],
    },
  }

  render() {
    return (
      <div>
        <CritThumbnailList
          crits={ this.props.data.newestCrits }
          critsAreExpanded={ false }
        />
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
}

Home.propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    newestCrits: React.PropTypes.array,
  }),
};

export default graphql(query)(Home);
