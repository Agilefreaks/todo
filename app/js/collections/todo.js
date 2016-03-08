define([
  'backbone',
  'models/todo'
],function(Backbone, todoModel){
  return todoCollection = Backbone.Collection.extend({
    model: todoModel
  });
});
