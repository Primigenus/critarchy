import { Meteor } from 'meteor/meteor';
import axe from 'react-axe';
import React from 'react';
import ReactDOM from 'react-dom';

if(Meteor.isDevelopment) {
  axe(React, ReactDOM, 1000);
}
