define([
  'backbone',
  'models/todo'
], function (Backbone, Todo) {

  var Collection = Backbone.Collection.extend({
    model: Todo
  });

  return new Collection();
});
