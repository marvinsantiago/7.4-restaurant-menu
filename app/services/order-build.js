import Ember from 'ember';

export default Ember.Service.extend({
  ordersSubmitted: [],

  addToCart: function(item) {
    this.ordersSubmitted.pushObject(item);
  },

});
