import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  latitude: DS.attr(),
  longitude: DS.attr(),
  url: DS.attr(),
  siteImage: DS.attr(),
  fairyImage: DS.attr(),
  fairyTypes: DS.belongsTo('fairyType', {async: true})
});
