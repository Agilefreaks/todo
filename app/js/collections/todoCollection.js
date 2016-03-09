define([
  'backbone',
  'models/todoModel'
],function (Backbone, todoModel) {
  return todoCollection = Backbone.Collection.extend({
    model: todoModel
  });
});
