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
      var compiledTemplate = ejs.render(newToDoTemplate, {}, {});
      this.$el.html(compiledTemplate);
      return this
    },

    onNewTodoClicked: function (e) {
      e && e.preventDefault();
      var value = this.$('input[type="text"]').val();
      if (value == '') {
        return;
      }

      this.todos.add(new ToDo({title: value}));
      this.$('input[type="text"]').val('');
    }
  });
});
