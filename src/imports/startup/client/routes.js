import React from 'react';
import Loadable from 'react-loadable';
import path from 'path';
import Loading from '../../ui/components/Loading';

const Home = Loadable({
  loader: () => import('../../ui/pages/home'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, '../../ui/pages/home'),
});
const Upload = Loadable({
  loader: () => import('../../ui/pages/upload'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, '../../ui/pages/upload'),
});
const SignIn = Loadable({
  loader: () => import('../../ui/pages/signin'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, '../../ui/pages/signin'),
});
const Sketchbook = Loadable({
  loader: () => import('../../ui/pages/sketchbook'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, '../../ui/pages/sketchbook'),
});
const Profile = Loadable({
  loader: () => import('../../ui/pages/profile'),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, '../../ui/pages/profile'),
});

export { Home, Upload, SignIn, Sketchbook, Profile };
