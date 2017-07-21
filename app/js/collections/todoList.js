define([
  'jquery',
  'backbone',
  'model/todo'
], function ($, Backbone, Todo) {

  return Backbone.Collection.extend({
    model: Todo,

    //will be used for filtering to return done models
    done: function () {
      return this.where({
        done: true
      });
    },

    //will be used for filtering to return pending models
    pending: function () {
      return this.where({
        done: false
      });
    },
  });
});
