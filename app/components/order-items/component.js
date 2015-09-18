import Ember from 'ember';

export default Ember.Component.extend({
  orders: Ember.inject.service('order-build'),
  loading: false,

  actions: {
    addItems: function() {
      this.set('loading', true);

      this.get('orders').addItem().then(() => {
        this.set('loading', false);
      });
    }
  }
});
