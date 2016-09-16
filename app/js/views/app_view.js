define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'models/todo',
  'collections/todos',
  'views/add_todo_view',
  'views/todos_view'
], function ($, Backbone, indexTemplate, ToDo, ToDoCollection, AddToDoView, ToDosView) {
  return Backbone.View.extend({
    initialize: function () {
      this.toDosView = new ToDosView({collection: this.collection});
      this.addToDoView = new AddToDoView({collection: this.collection});
    },

    el: this.$('#todo-app'),

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate);

      this.$el.empty();
      this.$el.append(compiledTemplate);

      this.$('#todo-input').replaceWith(this.addToDoView.render().$el);
      this.$('#todo-list').replaceWith(this.toDosView.render().$el);

      return this;
    }
  });
});
