import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import TimeAgo from 'react-timeago';

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
    user: React.PropTypes.shape({
      name: React.PropTypes.string,
    }),
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      sketchbook: React.PropTypes.array,
    }),
  }

  render() {
    const { user, data: { loading } } = this.props;
    return loading ? <div>Loading...</div> : (
      <div>
        <h1>{ user.name }&apos;s sketchbook</h1>
        { this.renderArt() }
      </div>
    );
  }

  renderArt() {
    const { sketchbook } = this.props.data;
    return (
      <ul>
        { sketchbook.map((art, i) => (
          <li key={ i }>
            <h2>{ art.title }</h2>
            <img src={ art.image.thumb_small } alt="" />
            <p>Posted <TimeAgo date={ art.createdOn } /> - { art.numCrits } crits</p>
          </li>
        )) }
      </ul>
    );
  }
}

export default graphql(SKETCHBOOK_QUERY)(Sketchbook);