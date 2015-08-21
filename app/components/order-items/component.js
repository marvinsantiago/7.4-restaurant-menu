import Ember from 'ember';

export default Ember.Component.extend({
    orders: Ember.inject.service('order-build'),

    actions: {
      addToCart: function() {
        this.get('orders');
      }
    }
});
