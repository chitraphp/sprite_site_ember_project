import Ember from 'ember';

export default Ember.Component.extend({

  map: Ember.inject.service('google-map'),

//     actions: {
//       showMap(model) {
//         var marker;
//         //debugger;
//         //alert(model.length);
//         var container = this.$('.map-display')[0];
//         var displayMap = this.get('map').findMap(container);
//
//         var sites = [];
//         model.forEach(function(site) {
//           sites.push( [site.get('name'), site.get('latitude'), site.get('longitude')]);
//         });
//
//         var map = new google.maps.Map(document.getElementById('.map-display'), {
//       zoom: 10,
//       center: new google.maps.LatLng(-122.654422,45.5434085),
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     });
//
//     var infowindow = new google.maps.InfoWindow();
//
//     var marker, i;
//
//         for (var i = 0; i < sites.length; i++) {
//           alert(sites[i][2]);
//     var marker = new google.maps.Marker({
//
//         position: new google.maps.LatLng(sites[i][2], sites[i][3]),
//         map:map
//
//       });
//      }
// //marker.setMap();
//   }
// }






  actions: {
    showMap(site) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(site.get('latitude'), site.get('longitude')),
        zoom: 15
      };
      var myLatlng = new google.maps.LatLng(site.get('latitude'),site.get('longitude'));
      var marker = new google.maps.Marker({
    position: myLatlng,
    title: site.get('name')
});
      var displayMap = this.get('map').findMap(container, options);
      marker.setMap(displayMap);
    }
  }
});
