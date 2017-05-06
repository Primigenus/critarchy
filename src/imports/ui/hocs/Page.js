// @flow

import React from 'react';

export default (WrappedComponent: ReactClass<any>) =>
  class Page extends React.Component {
    render() {
      return (
        <div className="page-container">
          <WrappedComponent {...this.props} />
          <style jsx>{`
            .page-container {
              padding: 2rem;
            }
          `}</style>
        </div>
      );
    }
  };
