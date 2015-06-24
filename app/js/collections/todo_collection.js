define([
  'backbone',
  'models/todo_model'
], function (Backbone, TodoModel) {
  return Backbone.Collection.extend({
    model: TodoModel
  });
});
