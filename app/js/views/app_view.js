/* eslint-disable no-trailing-spaces */
define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'models/todo_model',
  'collections/todo_collection'
], function ($, Backbone, indexTemplate, ToDoModel, TodoCollection) {
  var toDoCollection;

  return Backbone.View.extend({
    events: {
      'click #new-todo': 'addNewToDo'
    },

    initialize: function () {
      toDoCollection = new TodoCollection();
      this.input = this.$('#todo-description');
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
    
    addNewToDo: function () {
      
    }
  });
});
