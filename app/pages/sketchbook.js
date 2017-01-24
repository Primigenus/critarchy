import React from 'react';
import gql from 'graphql-tag';
import 'isomorphic-fetch';
import { graphql, compose } from 'react-apollo';
import TimeAgo from 'react-timeago';

import layout from '../hocs/layout';
import withData from '../data/withData';

const SKETCHBOOK_QUERY = gql`
  query {
    sketchbook(page: 1) {
      id
      createdOn
      title
      image {
        thumb_small
      }
      numCrits
    }
  }
`;

class Sketchbook extends React.Component {
  static propTypes = {
    currentUser: React.PropTypes.shape({
      name: React.PropTypes.string,
    }),
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      sketchbook: React.PropTypes.array,
    }),
  }

  render() {
    const { currentUser, data: { loading } } = this.props;
    return (
      <div>
        <h1>{ currentUser.name }&apos;s sketchbook</h1>
        { loading
          ? <div>Loading...</div>
          : this.renderArt()
        }
      </div>
    );
  }

  renderArt() {
    const { sketchbook } = this.props.data;
    return (
      <ul>
        { sketchbook.map(art => (
          <li>
            <h2>{ art.title }</h2>
            <img src={ art.image.thumb_small } alt="" />
            <p>Posted <TimeAgo date={ art.createdOn } /> - { art.numCrits } crits</p>
          </li>
        )) }
      </ul>
    );
  }
}

export default compose(
  layout({ title: currentUser => `${currentUser.name}'s sketchbook` }),
  withData,
  graphql(SKETCHBOOK_QUERY),
)(Sketchbook);
