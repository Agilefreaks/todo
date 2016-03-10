var KEY_ENTER_CODE = 13;

define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'text!templates/todo_view.ejs',
  'collections/todo'
], function ($, Backbone, indexTemplate, todoTemplate, Todo) {
  return Backbone.View.extend({
    events: {
      'click #addButton': 'onAddButtonClick',
      'keydown #input': 'onKeyDown'
    },

    initialize: function () {
      this.todo = new Todo();
    },

    el: this.$('#todo-app'),

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    },

    renderTodo: function (el) {
      var compiledTemplateTodo;

      el.empty();
      this.todo.each(function (modelTodo) {
        compiledTemplateTodo = ejs.render(todoTemplate, {view: this, model: this.model, modelName: modelTodo.get('name')}, {});
        el.append(compiledTemplateTodo);
      });
    },

    onAddButtonClick: function () {
      var input = this.$('#input');

      var newItem = input.val();

      this.addItems(newItem);
      input.val('');
    },

    addItems: function (item) {
      var newItem;

      if (_.isEmpty(_.trim(item))) {
        return;
      }
      newItem = {name: item, done: false};
      this.todo.add(newItem);
      this.renderTodo(this.$('#todoList'));
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
