import Ember from 'ember';

export default Ember.Component.extend({
    isWide: false,
    actions: {
      toggleImageSize : function() {
        this.toggleProperty('isWide');
      }
    }
});
