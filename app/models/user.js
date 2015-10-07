import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  password: DS.attr(),
  fairyType: DS.attr(),
  //fairyType: DS.belongsTo('fairyType', {async: true}),
});
