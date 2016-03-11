define([
  'backbone',
  'models/todo'
], function (Backbone, todo) {
  var todos;

  todos = Backbone.Collection.extend({
    model: todo
  });
  return todos;
});
