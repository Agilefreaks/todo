define([
  'jquery',
  'backbone',
  'views/new_todo_view'

], function ($, Backbone, ToDoView) {
  return Backbone.View.extend({
    el: $('#todo-app'),
    events: {
      'click #newToDo': 'onNewTodoClicked'
    },

    initialize: function () {
      this.todoView = new ToDoView();
    },

    render: function () {
      this.$el.append(this.todoView.render().$el);
      return this
    }
  });
});