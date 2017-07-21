define([
  'jquery',
  'backbone',
  'model/todo',
  'collections/todoList'
], function ($, Backbone, Todo, TodoList) {
  return Backbone.View.extend({
    el: '#todo-app',

    //events for creating new items
    events: {
      'click #addButton': 'createOnButtonClick',
      'keypress #new-todo': 'createOnEnter'
    },

    //bind events on the TodoList collection in order to add items
    initialize: function () {
      this.$input = this.$('#new-todo');
    },

    createTodo: function () {
      return new Todo({
        name: this.$input.val().trim(),
        done: false
      });
    },

    createOnButtonClick: function () {
      if(this.$input.val().trim() !== ""){
        this.collection.add(this.createTodo());
      }
    },

    createOnEnter: function (e) {
      var key_code = (e.keyCode ? e.keyCode : e.which);
      if(key_code !== 13 || this.$input.val().trim() == ""){
        return;
      }

      this.collection.add(this.createTodo());
    }
  })
});

