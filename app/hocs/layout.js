import React from 'react';
import HtmlHead from '../components/HtmlHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getUserFromCookie, getUserFromLocalStorage } from '../utils/auth';

const layout = (title, Page) => class Layout extends React.Component {
  static getInitialProps(ctx) {
    const loggedUser = process.browser ? getUserFromLocalStorage() : getUserFromCookie(ctx.req);
    const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
    return {
      ...pageProps,
      loggedUser,
      currentUrl: ctx.pathname,
      isAuthenticated: !!loggedUser,
    };
  }

  constructor(props) {
    super(props);
    this.logout = () => this.logout();
  }

  componentDidMount() {
    window.addEventListener('storage', this.logout, false);
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.logout, false);
  }

  render() {
    return (
      <div>
        <HtmlHead { ...this.props } />
        <Header { ...this.props } />
        <Page { ...this.props } />
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
