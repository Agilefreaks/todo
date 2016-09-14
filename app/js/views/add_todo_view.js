define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'models/todo'
], function ($, Backbone, indexTemplate, ToDo) {
  return Backbone.View.extend({
    events: {
      submit: 'createNew'
    },

    input: this.$('#todo-new-input'),

    createNew: function (e) {
      var inputValue = this.input.val().trim();
      var toDoItem = this.createItem(inputValue);

      e.preventDefault();
      if (!inputValue) { return; }

      this.model.addOne(toDoItem);

      this.input.val('');
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
