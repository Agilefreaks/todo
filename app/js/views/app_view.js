/* eslint-disable no-trailing-spaces */
define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'models/todo_model',
  'collections/todo_collection',
  'views/todo_view'
], function ($, Backbone, indexTemplate, ToDoModel, TodoCollection, ToDoView) {
  var toDoCollection;

  return Backbone.View.extend({
    events: {
      'click #new-todo': 'onClickAdd'
    },

    initialize: function () {
      toDoCollection = new TodoCollection();
      this.listenTo(toDoCollection, 'add', this.addToDo);
    },

    el: this.$('#todo-app'),

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    },

    getTodoCollection: function () {
      return toDoCollection;
    },

    createNewToDo: function () {
      toDoCollection.add(new ToDoModel());
    },

    onClickAdd: function () {
      var desc = this.$('#todo-description').val();
      var toDoModel = new ToDoModel({description: desc});

      if (desc !== '') {
        toDoCollection.add(toDoModel);
      }
    },

    addToDo: function (toDoModel) {
      var view = new ToDoView({model: toDoModel});

      this.$('#todo-list').append(view.render().el);
    }
  });
});
