import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //alert("x");
    return this.store.findAll('site');
  }
});
