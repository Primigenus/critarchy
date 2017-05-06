// @flow

import React, { Component } from 'react';
import CritThumbnail from './CritThumbnail';

/*
 * Renders a list of critiques.
 * The list is expected to already be sorted in the desired way.
 */
export default class CritThumbnailList extends Component {
  props: {
    crits: Array<CritThumbnail.propTypes.crit>,
    critsAreExpanded: boolean,
  };
  static defaultProps = {
    crits: [],
    // Critiques are expanded by default, but can be minimized by the user or
    // rendered minimized by its parent component if desired.
    critsAreExpanded: true,
  };

  render() {
    return (
      <div>
        {this.props.crits &&
          this.props.crits.map((crit, i) => (
            <CritThumbnail crit={crit} expanded={this.props.critsAreExpanded} key={i} />
          ))}
      </div>
    );
  }
}
