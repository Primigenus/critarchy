import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './layout.jsx';
import Home from '/imports/ui/Home.jsx';
import ArtList from '/imports/ui/ArtList.jsx';



FlowRouter.route("/", {
  action() {
    mount(MainLayout, {
      content: <Home />
    });
  }
});

FlowRouter.route("/crits", {
  action() {
    mount(MainLayout, {
      content: <Home />
    });
  }
});

FlowRouter.route("/art", {
  action() {
    mount(MainLayout, {
      content: <ArtList />
    });
  }
});

FlowRouter.route("/post", {
  action() {
    mount(MainLayout, {
      content: <Home />
    });
  }
});
