define([
  'jquery',
  'backbone',
  'text!templates/todos_view.ejs',
  'views/todo_item_view',
  'model/todo'
], function ($, Backbone, ToDosTemplate, TodoItemView, ToDo) {
  return Backbone.View.extend({
    tagName: 'ul',

    initialize: function () {
      this.listenTo(this.model, 'add', this.onToDoAdded);
    },

    onToDoAdded: function (model) {
      this.todoitemView = new TodoItemView({model: model});
      this.$el.append(this.todoitemView.render().$el);
    },

    render: function () {
      var compiledTemplate = ejs.render(ToDosTemplate, {}, {});
      this.$el.html(compiledTemplate);
      return this
    }
  });
});
