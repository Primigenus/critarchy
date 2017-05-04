import React from 'react';

export default WrappedComponent =>
  class Page extends React.Component {
    render(): WrappedComponent {
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
