define([
  'jquery',
  'backbone',
  'text!templates/todo_list_view.ejs'
], function ($, Backbone, todoListViewTemplate) {
  return Backbone.View.extend({
    el: this.$('#todo-list'),

    initialize: function(attr){
      this.options = attr;
    },

    events: {
      "click .delete" : "deleteTodoItem"
    },

    deleteTodoItem: function(e){
      this.options.todoItemCollection.remove(this.options.todoItemCollection.at(e.target.id));
      this.render();
    },

    render: function () {
      var compiledTemplate = ejs.render(todoListViewTemplate, {todosCollection: this.options.todoItemCollection}, {});
      
      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
