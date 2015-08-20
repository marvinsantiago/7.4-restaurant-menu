import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function() {
    this.route('menu-items', {path: '/'}, function() {
      this.route('index', {path: '/'});
      this.route('create', {path: '/new'});
      this.route('show', {path: '/:menu-items_id'});
      this.route('edit', {path: '/:menu-items_id/edit'});
      });
    });
  this.route('categories');

  this.route('menus', {path: '/menus'}, function() {
    this.route('index', {path: '/fullmenu'});
    this.route('show');
  });

  });

export default Router;
