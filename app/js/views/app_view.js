define([
  'jquery',
  'backbone',
  'model/todo'
], function ($, Backbone, Todo) {
  return Backbone.View.extend({
    events: {
      submit: 'addTodo'
    },

    initialize: function () {
      this.$input = this.$('#new-todo');
    },

    el: '#todo-app',

    render: function () {
      return this;
    },

    addTodo: function (e) {
      e.preventDefault();
      if (this.$input.val().trim() !== '') {
        this.collection.add(this.createTodo());
        this.$input.val('');
      }
    },

    createTodo: function () {
      return new Todo({
        name: this.$input.val().trim(),
        done: false
      });
    }

  });
});

