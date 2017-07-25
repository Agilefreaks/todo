define([
  'jquery',
  'backbone',
  'views/todoList_view',
  'views/addTodo_view'
], function ($, Backbone, TodoListView, AddTodoView) {
  return Backbone.View.extend({
    initialize: function () {
      this.addTodoView = new AddTodoView({collection: this.collection});
      this.todoListView = new TodoListView({collection: this.collection});
    },

    el: '#todo-app',

    render: function () {
      this.$el.empty();
      this.$el.append(this.addTodoView.render().$el);
      this.$el.append(this.todoListView.render().$el);

      return this;
    }
  });
});

