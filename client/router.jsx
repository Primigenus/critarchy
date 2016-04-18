import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './layout.jsx';
import Home from '/imports/ui/Home.jsx';
import CritList from '/imports/ui/CritList.jsx';
import ArtList from '/imports/ui/ArtList.jsx';
import PostArtForm from '/imports/ui/PostArtForm.jsx';



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
      content: <CritList />
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
      content: <PostArtForm />
    });
  }
});
