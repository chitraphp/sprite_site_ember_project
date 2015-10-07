import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  name: DS.attr(),
  description: DS.attr(),
  site: DS.hasMany('site', {async: true})
});
