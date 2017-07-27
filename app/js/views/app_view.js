define([
  'jquery',
  'backbone',
  'views/todoList_view',
  'views/addTodo_view',
  'views/filter_view',
  'model/filter'
], function ($, Backbone, TodoListView, AddTodoView, FilterView, Filter) {
  return Backbone.View.extend({
    initialize: function () {
      var filter = new Filter();

      this.addTodoView = new AddTodoView({collection: this.collection});
      this.todoListView = new TodoListView({collection: this.collection, listFilter: filter});
      this.filterView = new FilterView({collection: this.collection, listFilter: filter});
    },

    el: '#todo-app',

    render: function () {
      this.$el.append(this.addTodoView.render().$el);
      this.$el.append(this.todoListView.render().$el);
      this.$el.append(this.filterView.render().$el);

      return this;
    }
  });
});

