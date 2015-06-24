define([
  'backbone',
  'models/todo_model'
], function (Backbone, todoModel) {
  return Backbone.Collection.extend({
    model: todoModel
  });
});
