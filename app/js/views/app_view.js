define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'text!templates/todo_view.ejs',
  'models/todo',
  'collections/todos',
  'views/add_view',
  'views/todo_view'
], function ($, Backbone, indexTemplate, todoTemplate, Todo, Todos, AddView, TodoView) {
  return Backbone.View.extend({
    initialize: function () {
      this.addView = new AddView();
      this.todoView = new TodoView();
      this.listenTo(this.addView, 'addTodo', this.renderTodo);
    },

    el: this.$('#todo-app'),

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      this.addView.setElement(this.$('#todoAdd')).render();
      return this;
    },

    renderTodo: function () {
      this.todoView.setElement(this.$('#todoList')).render();
    }
  });
});
