define([
  'jquery',
  'backbone',
  'collections/todos',
  'models/todo',
  'views/todo_view'
], function ($, Backbone, ToDoCollection, ToDo, ToDoView) {
  return Backbone.View.extend({
    initialize: function () {
      this.listenTo(this.collection, 'add', this.updateView);
    },

    tagName: 'ul',
    id: 'todo-list',

    updateView: function (toDoItem) {
      var view = new ToDoView({model: toDoItem});

      this.$el.append(view.render().el);
    },

    render: function () {
      return this;
    }
  });
});
