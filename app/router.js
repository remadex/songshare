import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('user', function () {
    this.route('new');
    this.route('edit', {
      path: ":user_id/edit"
    });
  });
  this.route('login');
  this.route('upload');
  this.route('flux');
});

export default Router;
