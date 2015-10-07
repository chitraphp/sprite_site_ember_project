import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  latitude: DS.attr(),
  longitude: DS.attr(),
  url: DS.attr(),
  site-image: DS.attr(),
  fairy-image: DS.attr(),
  fairy-types: DS.belongsTo('fairy-type', {async: true})
});
