import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
    return this.store.findById('item', params.id);
  },
  actions: {
    delete: function(item) {
      item.destroyRecord();

      this.transitionTo('menus');
    }
  }
});
