define([
  'backbone',
  'models/todo_model'
], function (Backbone, Todo) {
  return Backbone.Collection.extend({
    model: Todo
  });
});
