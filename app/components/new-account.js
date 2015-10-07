import Ember from 'ember';

export default Ember.Component.extend({
  showNewAccountForm: false,
  actions: {
    showAccountFormAction() {
      this.set('showNewAccountForm', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        password: this.get('password') ? this.get('password') : "password",
        fairyType: "no fairy type yet",
      };
      this.set('showNewAccountForm', false),
      this.sendAction('save', params);
  }
}
});
