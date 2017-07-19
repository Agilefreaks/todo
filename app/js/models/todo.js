define([
  'backbone'
], function (Backbone) {
  var ToDo = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    }
  });

  return ToDo;
});
