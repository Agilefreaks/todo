define([
  'jquery',
  'backbone',
  'views/todo_view'
], function ($, Backbone, TodoView) {
  return Backbone.View.extend({
    initialize: function (attr) {
      this.options = attr;
      this.listFilter = this.options.listFilter;

      this.listenTo(this.collection, 'add', this.addTodo);
      this.listenTo(this.collection, 'change', this.reorder);

      this.listenTo(this, 'setVisibility', this.setVisibility);
    },

    tagName: 'ul',
    id: 'todo-list',

    render: function () {
      return this;
    },

    addTodo: function (todoItem) {
      var todoView = new TodoView({model: todoItem});

      this.$el.append(todoView.render().$el);
      this.setVisibility(todoView);
    },

    setVisibility: function (todoView) {
      this.listFilter.get('done') ? todoView.$el.toggleClass('hidden', !todoView.model.get('done')) : todoView.$el.toggleClass('hidden', todoView.model.get('done'));
    }

  });
});
