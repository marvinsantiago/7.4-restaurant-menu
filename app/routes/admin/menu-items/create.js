import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('menu-item');
  },

  actions: {
    save: function(data) {
      var menu = this.modelFor('menu.create');
      menu.setProperties(data);
      menu.save().then(() => {
        this.transitionTo('menu.index');
      });
    }
  }
});
