import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  url: DS.attr(),
  siteImage: DS.attr(),
  fairyImage: DS.attr(),
  fairyTypes: DS.belongsTo('fairy-type', {async: true}),
});
