define([
  'jquery',
  'backbone',
  'model/todo'
], function ($, Backbone, Todo) {
  return Backbone.Collection.extend({
    model: Todo
  });
});
