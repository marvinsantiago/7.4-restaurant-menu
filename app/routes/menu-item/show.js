import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findById('menu-item', params.id);
  },
  actions: {
    delete: function(item) {
      item.destroyRecord();

      this.transitionTo('item.index');
    }
  }
});
