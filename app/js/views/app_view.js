define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'views/new_todo_view',
  'views/todos_view',
  'collection/todos'
], function ($, Backbone, appViewTemplate, NewToDoView, ToDosView, ToDos) {
  return Backbone.View.extend({

    initialize: function () {
      var todos = new ToDos();
      this.newToDoView = new NewToDoView({model: todos});
      this.todosView = new ToDosView({model: todos});
    },

    render: function () {
      var compiledTemplate = ejs.render(appViewTemplate, {view: this, model: this.model}, {});
      this.$el.html(compiledTemplate);
      this.$('#todo-view').html(this.newToDoView.render().$el);
      this.$('#todos-view').html(this.todosView.render().$el);
      return this
    }
  });
});
