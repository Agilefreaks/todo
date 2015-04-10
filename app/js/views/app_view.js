define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'views/new_todo_view',
  'views/todos_view',
  'collection/todos',
  'services/session_service'
], function ($, Backbone, appViewTemplate, NewToDoView, ToDosView, ToDos, SessionService) {
  return Backbone.View.extend({
    initialize: function () {
      SessionService.todos = new ToDos();
      this.newToDoView = new NewToDoView({model: SessionService.todos});
      this.todosView = new ToDosView({model: SessionService.todos});
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
