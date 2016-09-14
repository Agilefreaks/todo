define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
<<<<<<< HEAD
  'models/todo',
  'views/todos_view'
], function ($, Backbone, indexTemplate, ToDo, ToDosView) {
=======
  'collections/todos',
  'models/todo',
  'views/todo_view'
], function ($, Backbone, indexTemplate, ToDoCollection, ToDo, ToDoView) {
>>>>>>> origin/17-display-items
  return Backbone.View.extend({
    events: {
      submit: 'createNew'
    },

<<<<<<< HEAD
    initialize: function () {
      this.toDosView = new ToDosView();
    },

    el: this.$('#todo-app'),

    input: this.$('#todo-new-input'),

=======
    el: this.$('#todo-app'),

>>>>>>> origin/17-display-items
    createNew: function (e) {
      var inputValue = this.input.val().trim();
      var toDoItem = this.createItem(inputValue);

<<<<<<< HEAD
      e.preventDefault();
      if (!inputValue) { return; }
      this.toDosView.addOne(toDoItem);
=======
      if (!inputValue) { return; }
      e.preventDefault();
      this.addOne(toDoItem);
      this.updateView(toDoItem);
>>>>>>> origin/17-display-items

      this.input.val('');
    },

    createItem: function (inputValue) {
      return new ToDo({
        title: inputValue,
        completed: false
      });
<<<<<<< HEAD
=======
    },

    addOne: function (toDoItem) {
      ToDoCollection.add(toDoItem);
    },

    updateView: function (toDoItem) {
      var view = new ToDoView({model: toDoItem});

      this.$el.append(view.render());
>>>>>>> origin/17-display-items
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
