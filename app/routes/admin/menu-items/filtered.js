import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor('menu-item').filter(function(model) {
      return model.get('price') === params.filter;
    });
  }
});
