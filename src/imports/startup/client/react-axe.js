import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

if (Meteor.isDevelopment) {
  Meteor.startup(async () => {
    const { default: axe } = await import('react-axe');
    axe(React, ReactDOM, 1000);
  });
}
