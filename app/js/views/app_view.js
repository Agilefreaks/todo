define([
  'jquery',
  'backbone',
  'models/todo',
  'collections/todos',
  'views/add_todo_view',
  'views/todos_view'
], function ($, Backbone, ToDo, ToDoCollection, AddToDoView, ToDosView) {
  return Backbone.View.extend({
    initialize: function () {
      this.toDosView = new ToDosView({model: new ToDoCollection(), el: this.$('#todo-list')});
      this.addToDoView = new AddToDoView({model: this.toDosView, el: this.$('#todo-input')});
    },

    el: this.$('#todo-app'),

    render: function () {
      this.$el.find('#todo-input').append(this.addToDoView.render().el);
      return this;
    }
  });
});
