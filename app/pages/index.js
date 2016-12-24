import React from 'react';
import Link from 'next/link';
import layout from '../hocs/layout';

/*
 * Displays a single critique.
 */
const crit = () => class Crit extends React.Component {
  static getInitialProps() {
    return {
      // Critiques are expanded by default, but can be minimized by the user or rendered minimized by its parent component if desired.
      expanded: true,
    };
  }

  render() {
    return (
      <div>

      </div>
    );
  }
};

/*
 * Renders a list of critiques.
 * The list is expected to already be sorted in the desired way.
 */
const critList = () => class CritList extends React.Component {
  static getInitialProps() {
    return {
      crits: [],
      // Critiques are expanded by default, but can be minimized by the user or rendered minimized by its parent component if desired.
      critsAreExpanded: true,
    };
  }

  render() {
    return (
      <div>
        {this.props.crits.map((crit) => (
          <Crit
            crit={crit}
            expanded={this.props.critsAreExpanded}
          />
        ))}
      </div>
    );
  }
};

export default layout('', ({ isAuthenticated }) => (
  <div>
    {/* TODO(diedra): Put top-thanked crits of last month here when there are
      * crits going back far enough that this would be useful.
      */}

    <div>Top-thanked crits of all time will go here</div>

    {/* TODO(diedra): Update this to be least-critted art of the last two weeks
      * here when we have art going back far enough that they're outdated.
      */}
    <div>Least-critted art of all time will go here</div>
  </div>
));
