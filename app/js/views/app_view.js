define([
  'jquery',
  'backbone',
  'model/todo',
  'text!templates/app_view.ejs'
], function ($, Backbone, Todo, AppViewTemplate) {
  return Backbone.View.extend({
    events: {
      submit: 'addTodo'
    },

    initialize: function () {
      this.$input = this.$('#new-todo');
    },

    el: '#todo-app',

    render: function () {
      var compiledTemplate = ejs.render(AppViewTemplate);

      this.$el.append(compiledTemplate);

      return this;
    },

    addTodo: function (e) {
      var inputValue = this.$input.val().trim();

      e.preventDefault();
      if (this.invalidInput(inputValue)) {
        return;
      }

      this.collection.add(new Todo({name: inputValue}));
      this.$input.val('');
    },

    invalidInput: function (input) {
      return _.isEmpty(input);
    }
  });
});

