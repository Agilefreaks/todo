define([
  'jquery',
  'backbone',
  'views/new_todo_view',
  'text!templates/app_view.ejs'
], function ($, Backbone, ToDoView, appViewTemplate) {
  return Backbone.View.extend({
    initialize: function () {
      this.todoView = new ToDoView();
    },

    render: function () {
      var compiledTemplate = ejs.render(appViewTemplate, {view: this, model: this.model}, {});
      this.$el.empty();
      this.$el.append(compiledTemplate);
      this.$('#todo-app-view').html(this.todoView.render().$el);
      return this
    }
  });
});
