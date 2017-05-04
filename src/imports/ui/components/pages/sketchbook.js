import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import TimeAgo from 'react-timeago';
import Art from '../Art';

const SKETCHBOOK_QUERY = gql`
  query {
    sketchbook(page: 1) {
      id
      createdOn
      title
      image {
        thumb_large
      }
      numCrits
    }
  }
`;

class Sketchbook extends React.Component {
  props: {
    user: {
      name: string,
    },
    data: {
      loading: boolean,
      sketchbook: Array<any>,
    },
  };

  render(): HTMLDivElement {
    const { user, data: { loading } } = this.props;
    return loading
      ? <div>Loading...</div>
      : <div>
          <h1>{user.name}'s sketchbook</h1>
          {this.renderArt()}
        </div>;
  }

  renderArt(): HTMLUListElement {
    const { sketchbook } = this.props.data;
    return (
      <ul className="sketchbook-items">
        {sketchbook.map((art, i) => (
          <li key={i}>
            <Art {...art} size="large" />
            <p>
              Posted <TimeAgo date={art.createdOn} /> - {art.numCrits} crits
            </p>
          </li>
        ))}
        <style jsx>{`
          .sketchbook-items {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </ul>
    );
  }
}

export default graphql(SKETCHBOOK_QUERY)(Sketchbook);
