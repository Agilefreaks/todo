define([
  'jquery',
  'backbone'
], function ($, Backbone) {
  return Backbone.Model.extend({
    defaults: {
      name: 'empty',
      done: false
    },

    toggle: function () {
      this.set({done: !this.get('done')});
    }
  });
});
