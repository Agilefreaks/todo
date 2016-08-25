define([
  'backbone',
  'models/todo'
], function (Backbone, ToDo) {
  var TodoCollection = Backbone.Collection.extend({
    model: ToDo
  });

  return new TodoCollection();
});
