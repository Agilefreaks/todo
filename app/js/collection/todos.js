define([
    'backbone',
    'model/todo'
  ],
  function (Backbone, ToDo) {
    return Backbone.Collection.extend({
      model: ToDo
    });
  });
