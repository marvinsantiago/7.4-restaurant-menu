import Ember from 'ember';

export default Ember.Route.extend({
    orders: Ember.inject.service('order-build'),

    model: function() {
      return this.store.findAll('item');
    }
});
