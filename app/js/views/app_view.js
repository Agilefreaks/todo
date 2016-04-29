define([
  'backbone',
  'text!templates/app_view.ejs',
  'views/todo_views'
], function (Backbone, indexTemplate, TodoViews) {
  return Backbone.View.extend({

    initialize: function () {
      this.todos = new TodoViews();
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {}, {});

      this.$el.html(compiledTemplate);
      this.$el.append(this.todos.render().$el);

      return this;
    }
  });
});
