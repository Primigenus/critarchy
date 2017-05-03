import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CritThumbnailList from '../components/CritThumbnailList';
import HomeBanner from '../components/HomeBanner';
import HOME_QUERY from './home.graphql';

class Home extends React.Component {
  props: {
    data: {
      loading: boolean,
      newestCrits: Array<any>,
    },
  };
  static defaultProps = {
    data: {
      newestCrits: [],
      leastCrittedArt: [],
      mostThankedCrits: [],
    },
  };
  render(): HTMLDivElement {
    return (
      <div>
        <HomeBanner />
        <CritThumbnailList crits={this.props.data.newestCrits} critsAreExpanded={false} />
      </div>
    );
  }
}

export default graphql(HOME_QUERY)(Home);
