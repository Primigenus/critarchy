import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CritThumbnailList from '../components/CritThumbnailList';
import HomeBanner from '../components/HomeBanner';

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
          picture
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
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      newestCrits: React.PropTypes.array,
    }),
  }
  render() {
    return (
      <div>
        <HomeBanner />
        <CritThumbnailList
          crits={ this.props.data.newestCrits }
          critsAreExpanded={ false }
        />
      </div>
    );
  }
}

export default graphql(query)(Home);
