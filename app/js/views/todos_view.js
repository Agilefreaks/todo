define([
  'jquery',
  'backbone',
  'collections/todos',
  'models/todo',
  'views/todo_view'
], function ($, Backbone, ToDoCollection, ToDo, ToDoView) {
  return Backbone.View.extend({

    el: this.$('#todo-list'),
    toDoCollection: new ToDoCollection(),

    addOne: function (toDoItem) {
      this.toDoCollection.add(toDoItem);
      this.updateView(toDoItem);
    },

    updateView: function (toDoItem) {
      var view = new ToDoView({model: toDoItem, $el: this.$el});

      this.$el.append(view.render().el);
    },

    render: function () {
      return this;
    }
  });
});
