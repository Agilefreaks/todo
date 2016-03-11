var KEY_ENTER_CODE = 13;

define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'text!templates/todo_view.ejs',
  'models/todo',
  'collections/todos',
   'views/add_view',
  'views/todo_view'
], function ($, Backbone, indexTemplate, todoTemplate, Todo, Todos, AddView, TodoView) {
  return Backbone.View.extend({
    initialize: function () {
      this.todos = new Todos();
    },

    el: this.$('#todo-app'),

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});
	  var addView = new AddView();
	  var todoView = new TodoView();

      this.$el.empty();
      this.$el.append(compiledTemplate);
	  addView.setElement(this.$('#todoAdd')).render();
	  todoView.setElement(this.$('#todoList')).render();
	  
      return this;
    }
  });
});
