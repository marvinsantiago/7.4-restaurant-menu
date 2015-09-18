import Ember from 'ember';

export default Ember.Service.extend({
  ordersSubmitted: [],

  addToCart: function(item) {
    this.ordersSubmitted.pushObject(item);
  },
  totalOrder: Ember.computed.mapBy('ordersSubmitted', 'price'),
  price: Ember.computed.sum('totalOrder')

});
