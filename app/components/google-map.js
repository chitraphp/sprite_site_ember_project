import Ember from 'ember';

export default Ember.Component.extend({

  map: Ember.inject.service('google-map'),

    actions: {
      showMap(model) {
        alert(Object.keys(model).length);
        var container = this.$('.map-display')[0];
  //       var options = {
  //         center: this.get('map').center(site.get('latitude'), site.get('longitude')),
  //         zoom: 15
  //       };
  //       var myLatlng = new google.maps.LatLng(site.get('latitude'),site.get('longitude'));
  //       var marker = new google.maps.Marker({
  //     position: myLatlng,
  //     title: site.get('name')
  // });
  //       var displayMap = this.get('map').findMap(container, options);
  //       marker.setMap(displayMap);
     }
    }

    // var markers = [
    //     [site.get('name'), site.get('latitude'), site.get('longitude')]
    //
    // ];
    //



//
//   actions: {
//     showMap(site) {
//       var container = this.$('.map-display')[0];
//       var options = {
//         center: this.get('map').center(site.get('latitude'), site.get('longitude')),
//         zoom: 15
//       };
//       var myLatlng = new google.maps.LatLng(site.get('latitude'),site.get('longitude'));
//       var marker = new google.maps.Marker({
//     position: myLatlng,
//     title: site.get('name')
// });
//       var displayMap = this.get('map').findMap(container, options);
//       marker.setMap(displayMap);
//     }
//   }
});
