define([
  'jquery',
  'backbone',
  'text!templates/new_todo_view.ejs',
  'model/todo',
  'collection/todos'
], function ($, Backbone, newToDoTemplate, ToDo, ToDos) {
  return Backbone.View.extend({
    events: {
      'click #newToDo': 'onNewTodoClicked'
    },

    initialize: function () {
      this.todos = new ToDos();
    },

    render: function () {
      var compiledTemplate = ejs.render(newToDoTemplate, {view: this, model: this.model}, {});
      this.$el.html(compiledTemplate);
      return this
    },

    onNewTodoClicked: function (e) {
      e && e.preventDefault();
      var title = this.$('input[type="text"]').val();
      this.todos.add(new ToDo({title: title}));
      this.$('input[type="text"]').val('');
    }
  });
});
