define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'collections/todos',
  'models/todo'
], function ($, Backbone, indexTemplate, ToDoCollection, ToDo) {
  return Backbone.View.extend({
    events: {
      submit: 'createNew'
    },

    el: this.$('#todo-app'),

    toDoCollection: new ToDoCollection(),

    input: this.$('#todo-new-input'),

    createNew: function (e) {
      var inputValue = this.input.val().trim();

      e.preventDefault();
      if (!inputValue) { return; }
      this.addOne(inputValue);
      this.input.val('');
    },

    addOne: function (inputValue) {
      var toDoItem = new ToDo(inputValue);

      this.toDoCollection.add(toDoItem);
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      this.input = this.$el.find('#todo-new-input');
      return this;
    }
  });
});
