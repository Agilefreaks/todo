define([
  'backbone',
  'models/todo'
], function (Backbone, todoModel) {
  var todo;

  todo = Backbone.Collection.extend({
    model: todoModel
  });
  return todo;
});
