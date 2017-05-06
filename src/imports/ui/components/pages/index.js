// @flow

import React from 'react';
import Loadable from 'react-loadable';
import path from 'path';
import Loading from '../Loading';

const Home = Loadable({
  loader: () => import('./home'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, './home'),
});
const Upload = Loadable({
  loader: () => import('./upload'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, './upload'),
});
const SignIn = Loadable({
  loader: () => import('./signin'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, './signin'),
});
const Sketchbook = Loadable({
  loader: () => import('./sketchbook'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, './sketchbook'),
});
const Profile = Loadable({
  loader: () => import('./profile'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, './profile'),
});

export { Home, Upload, SignIn, Sketchbook, Profile };
