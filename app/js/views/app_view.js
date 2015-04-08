define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'model/todo',
  'collection/todos'
], function ($, Backbone, indexTemplate, ToDo, ToDos) {
  return Backbone.View.extend({
    el: $('#todo-app'),

    events: {
      'click #newToDo': 'onNewTodoClicked'
    },

    initialize: function () {
      this.todos = new ToDos();
      this.$input = this.$('input[type="text"]');
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});
      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this
    },

    onNewTodoClicked: function () {
      this.todos.add(new ToDo({title: this.$input.val()}));
    }
  });
});