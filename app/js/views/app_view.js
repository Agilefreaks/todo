var KEY_ENTER_CODE = 13;

define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'text!templates/todo_view.ejs',
  'models/todo',
  'collections/todos'
], function ($, Backbone, indexTemplate, todoTemplate, Todo, Todos) {
  return Backbone.View.extend({
    events: {
      'click #addButton': 'onAddButtonClick',
      'keydown #input': 'onKeyDown'
    },

    initialize: function () {
      this.todos = new Todos();
    },

    el: this.$('#todo-app'),

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    },

    renderTodos: function (el) {
      var compiledTemplateTodo;

      el.empty();
      this.todos.each(function (modelTodo) {
        compiledTemplateTodo = ejs.render(todoTemplate, {view: this, model: this.model, modelName: modelTodo.get('name')}, {});
        el.append(compiledTemplateTodo);
      });
    },

    onAddButtonClick: function () {
      var input = this.$('#input');

      this.addTodo(input.val());
      input.val('');
    },

    addTodo: function (input) {
      var newTodo = new Todo();

      if (_.isEmpty(_.trim(input))) {
        return;
      }
      newTodo.set('name', input);
      newTodo.set('done', false);
      this.todos.push(newTodo);
      this.renderTodos(this.$('#todoList'));
    },

    onKeyDown: function (e) {
      if (e.which !== KEY_ENTER_CODE) {
        return;
      }
      e.preventDefault();
      this.onAddButtonClick();
    }
  });
});
