import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import CritThumbnailList from '../components/CritThumbnailList';
import HomeBanner from '../components/HomeBanner';
import HOME_QUERY from './home.graphql';

type Props = {
  data: {
    loading: boolean,
    newestCrits: Array<any>,
  },
};

class Home extends React.Component {
  static defaultProps = {
    data: {
      newestCrits: [],
      leastCrittedArt: [],
      mostThankedCrits: [],
    },
  };
  props: Props;
  render() {
    return (
      <div>
        <HomeBanner />
        <CritThumbnailList crits={this.props.data.newestCrits} critsAreExpanded={false} />
      </div>
    );
  }
}

export default graphql(HOME_QUERY)(Home);
