define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'collections/todo_item_collection',
  'models/todo_item'
], function ($, Backbone, indexTemplate, TodoItemCollection, TodoItem) {
  return Backbone.View.extend({
    el: this.$('#todo-app'),
    initialize: function(){
      this.todoItemCollection = new TodoItemCollection();
    },

    events:{
      "click #add-todo-button" : "addTodo"
    },

    currentDate: function () {
      return new Date();
    },

    addTodo: function() {
      var todoTitle = this.$('#todo-title-textbox').val();
      if(!todoTitle) return;
      var todoItem = new TodoItem({
        title: todoTitle,
      });
      this.todoItemCollection.add(todoItem);
      console.log(todoItem.get('title'));
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
