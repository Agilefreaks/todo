define([
  'backbone'
], function (Backbone) {
  return Backbone.Model.extend({
    defaults: {
      name: '',
      done: false,
      removed: false
    }
  });
});
