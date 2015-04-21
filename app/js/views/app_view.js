define([
  'jquery',
  'backbone',
  'views/new_todo_view'
], function ($, Backbone, TodoView) {
  return Backbone.View.extend({
    el: $('#todo-app'),

    initialize: function() {
      this.todoView = new TodoView();
    },

    render: function () {
      this.$el.empty();
      this.$el.append(this.todoView.render().$el);

      return this;
    }
  });
});