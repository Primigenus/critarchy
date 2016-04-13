import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './layout.jsx';
import Home from '/imports/ui/Home.jsx';



FlowRouter.route("/", {
  action() {
    mount(MainLayout, {
      content: <Home />
    });
  }
});
