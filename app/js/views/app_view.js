define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'collections/todo_item_collection',
  'models/todo_item',
  'views/todo_item_list_view'
], function ($, Backbone, indexTemplate, TodoItemCollection, TodoItem, TodoListView) {
  return Backbone.View.extend({
    el: this.$('#todo-app'),

    initialize: function(){
      this.todoItemCollection = new TodoItemCollection();
      this.todoListView = new TodoListView({todoItemCollection: this.todoItemCollection});
    },

    events:{
      "click #add-todo-button" : "addTodo",
      "keydown #todo-title-textbox" : "onKeyDownEventHandler"
    },

    onKeyDownEventHandler: function(e){
      if(e.keyCode==13){
        this.$('#add-todo-button').click();
      }
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
      this.$('#todo-title-textbox').val('');
      this.render();
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);

      this.todoListView.setElement(this.$("#todo-list")).render();

      return this;
    }
  });
});
