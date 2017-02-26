import './react-axe';
import { Meteor } from 'meteor/meteor';

Meteor.startup(async () => {
  const { default: renderRoutes } = await import('./routes');
  const { render } = await import('react-dom');
  render(renderRoutes(), document.getElementById('react-root'));
  Meteor.subscribe('userDetails');
});
