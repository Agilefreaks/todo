define([
  'backbone',
  'models/todo'
], function (Backbone, ToDo) {
  var ToDoCollection = Backbone.Collection.extend({
    model: ToDo
  });

  return new ToDoCollection();
});
