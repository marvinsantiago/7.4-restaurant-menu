import Ember from 'ember';

export default Ember.Component.extend({
  resetFormValues: function() {

    var values = this.get('item').toJSON();
    this.setProperties(values);
  }.on('init'),

  actions: {
    save: function() {
      var data = this.getProperties('name', 'description', 'category', 'price');
      this.sendAction('save', this.get('item'), data);
    }
  }
});
