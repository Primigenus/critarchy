import React from 'react';
import layout from '../hocs/layout';
import apollo from '../hocs/apollo';
import gql from 'graphql-tag';
import 'isomorphic-fetch';
import CritThumbnailList from '../components/CritThumbnailList';

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
