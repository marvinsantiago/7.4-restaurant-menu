import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('item');
  },

  actions: {
    save: function(item) {
      item.save().then(() => {
        this.transitionTo('admin.menu-items.index');
      });
    }
  }
});
