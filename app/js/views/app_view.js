define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'views/new_todo_view'
], function ($, Backbone, indexTemplate, TodoView) {
  return Backbone.View.extend({
    el: $('#todo-app'),

    initialize: function() {
      this.todoView = new TodoView();
    },
    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});
      this.$el.empty();

      this.$el.append(compiledTemplate);
      this.$el.append(this.todoView.render().$el);
      return this
    }
  });
});
