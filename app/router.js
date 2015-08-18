import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('menu', {path:'menu'}, function() {
    this.route('create', {path: 'new'});
    this.route('show', {path: ':id'});
    this.route('update', {path: ':menu_id/edit'});
  });
});

export default Router;
