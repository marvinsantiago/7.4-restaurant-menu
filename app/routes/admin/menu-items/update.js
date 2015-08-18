import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(data) {
      var item = this.modelFor('item.update');
      item.setProperties(data);
      item.save().then(() => {this.transitionTo('admin.menu-item');});

    }
  }
});
