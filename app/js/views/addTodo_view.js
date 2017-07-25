define([
  'jquery',
  'backbone',
  'model/todo',
  'text!templates/addTodo_view.ejs'
], function ($, Backbone, Todo, AddTodoTemplate) {
  return Backbone.View.extend({
    events: {
      submit: 'addTodo'
    },

    render: function () {
      var addTodoTemplate = ejs.render(AddTodoTemplate, {view: this, model: this.model});

      this.$el.append(addTodoTemplate);
      this.input = this.$('#new-todo');

      return this;
    },

    addTodo: function (e) {
      var inputValue = this.input.val().trim();

      e.preventDefault();
      if (this.invalidInput(inputValue)) {
        return;
      }

      this.collection.add(new Todo({name: inputValue}));
      this.input.val('');
    },

    invalidInput: function (input) {
      return _.isEmpty(input);
    }
  });
});
