define([
  'jquery',
  'backbone',
  'views/todo_item_view'
], function ($, Backbone, TodoItemView) {
  return Backbone.View.extend({

    tagName: 'ul',
    className: 'todos_list',

    initialize: function () {
      this.listenTo(this.collection, 'add', this.renderItem.bind(this));
    },

    renderItem: function (model) {
      var item = new TodoItemView({model: model});

      this.$el.append(item.render().$el);
      return this;
    },

    render: function () {
      return this;
    }
  });
});
