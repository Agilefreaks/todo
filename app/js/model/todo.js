define([
  'jquery',
  'backbone'
], function($, Backbone) {

  return Backbone.Model.extend({
    defaults: {
        "name": "empty",
        "done": "false"
    },

    toggle: function () {
      this.save({
        done: !this.get("done")
      });
    }
  });
});
