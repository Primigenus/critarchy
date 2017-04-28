import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CritThumbnailList from '../components/CritThumbnailList';
import HomeBanner from '../components/HomeBanner';

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
  };
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      newestCrits: React.PropTypes.array,
    }),
  };
  render() {
    return (
      <div>
        <HomeBanner />
        <CritThumbnailList crits={this.props.data.newestCrits} critsAreExpanded={false} />
      </div>
    );
  }
}

export default graphql(query)(Home);
