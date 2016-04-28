define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'views/todo_views'
], function ($, Backbone, indexTemplate, TodoViews) {
  return Backbone.View.extend({

    initialize: function () {
      this.todos = new TodoViews();
    },

    render: function () {
      var todos = this.todos;

      var compiledTemplate = ejs.render(indexTemplate, {}, {});

      this.$el.html(compiledTemplate);
      this.$el.append(todos.render().$el);

      return this;
    }
  });
});
