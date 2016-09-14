define([
  'backbone',
  'models/todo'
], function (Backbone, ToDo) {
  var ToDoCollection = Backbone.Collection.extend({
    model: ToDo
  });

<<<<<<< HEAD
  return ToDoCollection;
=======
  return new ToDoCollection();
>>>>>>> origin/17-display-items
});
