define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'views/new_todo_view'
], function ($, Backbone, appViewTemplate, ToDoView) {
  return Backbone.View.extend({
    initialize: function () {
      this.todoView = new ToDoView();
    },

    render: function () {
      var compiledTemplate = ejs.render(appViewTemplate, {view: this, model: this.model}, {});
      this.$el.html(compiledTemplate);
      this.$('#todo-view').html(this.todoView.render().$el);
      return this
    }
  });
});
