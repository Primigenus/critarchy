import React from 'react';
import HtmlHead from '../components/HtmlHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getUserFromCookie, getUserFromLocalStorage } from '../utils/auth';
import { logout } from '../utils/lock';

const layout = ({ title = '' } = {}) => Page => class Layout extends React.Component {
  static getInitialProps(ctx) {
    const currentUser = process.browser ? getUserFromLocalStorage() : getUserFromCookie(ctx.req);
    const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
    return {
      ...pageProps,
      title,
      currentUser,
      currentUrl: ctx.pathname,
      isAuthenticated: !!currentUser,
    };
  }

  componentDidMount() {
    window.addEventListener('storage', logout, false);
  }

  componentWillUnmount() {
    window.removeEventListener('storage', logout, false);
  }

  render() {
    return (
      <div>
        <HtmlHead title={ this.props.title } />
        <Header { ...this.props } />
        <main>
          <Page { ...this.props } />
        </main>
        <Footer />
      </div>
    );
  }
};

layout.propTypes = {
  title: React.PropTypes.string.isRequired,
  Page: React.PropTypes.element.isRequired,
};

export default layout;
