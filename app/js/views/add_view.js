//var KEY_ENTER_CODE = 13;

define([
  'jquery',
  'backbone',
  'text!templates/add_view.ejs'
], function ($, Backbone, addTemplate) {
  return Backbone.View.extend({
    events: {
      'click #addButton': 'onAddButtonClick',
      'keydown #input': 'onKeyDown'
    },

    el: this.$('#todoAdd'),

    render: function () {
      var compiledTemplateTodo;

      compiledTemplateTodo = ejs.render(addTemplate, {view: this, model: this.model}, {});
      this.$el.append(compiledTemplateTodo);
      return this;
    },

    onAddButtonClick: function () {
      //var input = this.$('#input');

      //this.addTodo(input.val());
      //input.val('');
    },

    addTodo: function () {
      //var newTodo = new Todo();
//
      //if (_.isEmpty(_.trim(input))) {
      //  return;
      //}
      //newTodo.set('name', input);
      //newTodo.set('done', false);
      //this.todos.push(newTodo);
      //this.renderTodos(this.$('#todoList'));
    },

    onKeyDown: function () {
      //if (e.which !== KEY_ENTER_CODE) {
      //  return;
      //}
      //e.preventDefault();
      //this.onAddButtonClick();
    }
  });
});
