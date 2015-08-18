import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function() {
    this.route('menu-items', {path: '/'}, function() {
      this.route('create', {path: 'new'});
      this.route('show', {path: ':menu_item_id'});
      this.route('update', {path: ':menu_item_id/edit'});
    });
  });
});

export default Router;
