import Ember from 'ember';

export default Ember.Component.extend({
  orders: Ember.inject.service('order-build'),
  items: [],

  categories: Ember.computed('items', 'items.@each.category', 'items.@each.name', function() {
    return this.get('items').reduce((build, item) => {
      var obj = build.findBy('name', item.get('category'));

      if(obj) {
        obj.items.push(item);
      } else {
        obj = {
          name: item.get('category'),
          items: [item]
        };
        build.push(obj);
      }

      return build;
      }, []);
    })
});
