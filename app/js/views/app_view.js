define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'collections/todo_collection',
  'models/todo_model'
], function ($, Backbone, indexTemplate, todoCollection, todoModel) {
  return Backbone.View.extend({
    el: $('#todo-app'),

    initialize: function () {
      this.todos = new todoCollection();
    },

    events: {
      'submit': 'onSubmit'
    },

    onSubmit: function (e) {
      var $input = this.$('#inputTodoText');

      this._createTodo($input.val());
      $input.val('');

      e.preventDefault();
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {}, {});
      this.$el.html(compiledTemplate);
      return this
    },

    _createTodo: function (text) {
      if (text.length === 0) return;

      this.todos.add(new todoModel({text: text}))
    }
  });
});
