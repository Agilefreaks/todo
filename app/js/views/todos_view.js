define([
  'jquery',
  'backbone',
  'text!templates/todos_view.ejs',
  'views/todo_item_view'
], function ($, Backbone, ToDosTemplate, TodoItemView) {
  return Backbone.View.extend({
    tagName: 'ul',

    initialize: function () {
      this.listenTo(this.model, 'add', this.onToDoAdded);
    },

    onToDoAdded: function (model) {
      var todoItemView = new TodoItemView({model: model});
      this.$el.append(todoItemView.render().$el);
    },

    render: function () {
      var compiledTemplate = ejs.render(ToDosTemplate, {}, {});
      this.$el.html(compiledTemplate);
      return this
    }
  });
});
