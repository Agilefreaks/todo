define([
  'jquery',
  'backbone',
  'views/todoListView',
  'views/addTodoView',
  'views/filterView'
], function ($, Backbone, TodoListView, AddTodoView, FilterView) {
  return Backbone.View.extend({
    initialize: function () {
      this.addTodoView = new AddTodoView({collection: this.collection});
      this.todoListView = new TodoListView({collection: this.collection});
      this.filterView = new FilterView({collection: this.collection});
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

