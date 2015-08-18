import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('admin');
  },

  actions: {
    save: function(data) {
      var admin = this.modelFor('admin.create');
      admin.setProperties(data);
      admin.save().then(() => {
        this.transitionTo('admin.index');
      });
    }
  }
});
