// @flow

import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CritThumbnailList from '../CritThumbnailList';
import HomeBanner from '../HomeBanner';
import HOME_QUERY from './home.graphql';

class Home extends React.Component {
  props: {
    data: {
      loading: boolean,
      newestCrits: Array<mixed>,
    },
    hasUser: boolean,
  };
  static defaultProps = {
    data: {
      newestCrits: [],
      leastCrittedArt: [],
      mostThankedCrits: [],
    },
  };
  render() {
    const { newestCrits } = this.props.data;
    return (
      <div>
        <HomeBanner hasUser={this.props.hasUser} />
        <CritThumbnailList crits={newestCrits} critsAreExpanded={false} />
      </div>
    );
  }
}

export default graphql(HOME_QUERY)(Home);
