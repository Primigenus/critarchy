import './react-axe';
import React from 'react';
import { Meteor } from 'meteor/meteor';

Meteor.startup(async () => {
  const { default: App } = await import('../../ui/app');
  const { render } = await import('react-dom');
  render(<App />, document.getElementById('react-root'));
  Meteor.subscribe('userDetails');
});
