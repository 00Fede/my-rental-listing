import Ember from 'ember';
//hardcoded data

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('rental');
  }
});
