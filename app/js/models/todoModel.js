define([
  'backbone'
],function (Backbone) {
  return Backbone.Model.extend({
    default: {
      name: "empty",
      done: false
    }
  });
});
