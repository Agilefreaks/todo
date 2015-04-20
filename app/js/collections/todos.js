define([
  'lodash',
  'backbone',
  'models/todo'
], function (_, Backbone, Todo) {
  return Backbone.Collection.extend({
    model: Todo
  });
});