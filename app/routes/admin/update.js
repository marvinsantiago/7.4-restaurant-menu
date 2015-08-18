import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(data) {
      var admin = this.modelFor('admin.update');
      admin.setProperties(data);
      admin.save().then(() => {this.transitionTo('admin.index');});

    }
  }
});
