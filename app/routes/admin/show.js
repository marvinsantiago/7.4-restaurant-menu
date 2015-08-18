import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findById('admin', params.id);
  },
  actions: {
    delete: function(admin) {
      admin.destroyRecord();

      this.transitionTo('admin.index');
    }
  }
});
