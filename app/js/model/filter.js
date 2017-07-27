define([
  'jquery',
  'backbone'
], function ($, Backbone) {
  return Backbone.Model.extend({
    defaults: {
      none: true,
      done: false,
      notDone: false
    },

    setFilterNone: function () {
      this.set({none: true});

      this.set({notDone: false});
      this.set({done: false});
    },

    setFilterDone: function () {
      this.set({done: true});

      this.set({notDone: false});
      this.set({none: false});
    },

    setFilterNotDone: function () {
      this.set({notDone: true});

      this.set({done: false});
      this.set({none: false});
    }
  });
});
