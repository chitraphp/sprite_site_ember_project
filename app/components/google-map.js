import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  actions: {
    showMap(site) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(site.get('latitude'), site.get('longitude')),
        zoom: 15
      };
      this.get('map').findMap(container, options);
    }
  }
});
