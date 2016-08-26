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
      var ToDoItem = this.createItem(inputValue);

      if (!inputValue) { return; }
      e.preventDefault();
      this.addOne(ToDoItem);
      this.updateView(ToDoItem);

      this.input.val('');
    },

    createItem: function (inputValue) {
      return new ToDo({
        title: inputValue,
        completed: false
      });
    },

    addOne: function (ToDoItem) {
      ToDoCollection.add(ToDoItem);
    },

    updateView: function (ToDoItem) {
      var view = new ToDoView({model: ToDoItem});

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
