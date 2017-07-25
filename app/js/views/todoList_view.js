define([
  'jquery',
  'backbone',
  'views/todo_view'
], function ($, Backbone, TodoView) {
  return Backbone.View.extend({
    initialize: function () {
      this.listenTo(this.collection, 'add', this.addTodo);
    },

    tagName: 'ul',
    id: 'todo-list',

    render: function () {
      return this;
    },

    addTodo: function (todoItem) {
      var todoView = new TodoView({model: todoItem});

      this.$el.append(todoView.render().$el);
    }
  });
});
