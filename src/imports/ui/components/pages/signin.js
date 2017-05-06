import { Meteor } from 'meteor/meteor';
import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Page from '../../hocs/Page';
import DefaultHelmet from '../../components/DefaultHelmet';

class SignIn extends React.Component {
  props: {
    hasUser: boolean,
  };
  state = {
    redirect: false,
  };
  onClickGoogle = (evt: Event): void => {
    evt.preventDefault();
    Meteor.loginWithGoogle(() => {
      this.setState({ redirect: true });
    });
  };
  onClickFacebook = (evt: Event): void => {
    evt.preventDefault();
    Meteor.loginWithFacebook(() => {
      this.setState({ redirect: true });
    });
  };
  render(): Redirect | HTMLDivElement {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <DefaultHelmet>
          <title>Sign in</title>
        </DefaultHelmet>
        <h1 className="title">Sign in</h1>
        <div>
          {!this.props.hasUser &&
            <div className="signin">
              <p>
                <button onClick={this.onClickGoogle} className="button">
                  Sign in with Google
                </button>
              </p>
              <p>
                <button onClick={this.onClickFacebook} className="button">
                  Sign in with Facebook
                </button>
              </p>
            </div>}
        </div>
        <style jsx>{`
          .signin {
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default withRouter(Page(SignIn));
