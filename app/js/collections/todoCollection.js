define([
  'backbone',
  'models/todoModel'
], function (Backbone, todoModel) {
  var todoCollection;

  todoCollection = Backbone.Collection.extend({
    model: todoModel
  });
  return todoCollection;
});
