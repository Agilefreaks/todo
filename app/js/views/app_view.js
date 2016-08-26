define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'collections/todos',
  'models/todo',
  'views/todo_view'
], function ($, Backbone, indexTemplate, ToDoCollection, ToDo, ToDoView) {
  return Backbone.View.extend({
    events: {
      submit: 'createNew'
    },

    el: this.$('#todo-app'),

    createNew: function (e) {
      var inputValue = this.input.val().trim();
      var toDoItem = this.createItem(inputValue);

      if (!inputValue) { return; }
      e.preventDefault();
      this.addOne(toDoItem);
      this.updateView(toDoItem);

      this.input.val('');
    },

    createItem: function (inputValue) {
      return new ToDo({
        title: inputValue,
        completed: false
      });
    },

    addOne: function (toDoItem) {
      ToDoCollection.add(toDoItem);
    },

    updateView: function (toDoItem) {
      var view = new ToDoView({model: toDoItem});

      this.$el.append(view.render());
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
