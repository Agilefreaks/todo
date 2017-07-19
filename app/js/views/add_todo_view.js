define([
  'jquery',
  'backbone',
  'text!templates/add_todo_view.ejs',
  'models/todo',
  'ejs'
], function ($, Backbone, indexTemplate, ToDo) {
  return Backbone.View.extend({
    events: {
      submit: 'createNew'
    },

    id: 'todo-input',

    createNew: function (e) {
      var inputValue = this.input.val().trim();
      var toDoItem = this.createItem(inputValue);

      e.preventDefault();
      if (inputValue) {
        this.collection.add(toDoItem);

        this.input.val('');
      }
    },

    createItem: function (inputValue) {
      return new ToDo({
        title: inputValue,
        completed: false
      });
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.append(compiledTemplate);
      this.input = this.$el.find('#todo-new-input');
      return this;
    }
  });
});
