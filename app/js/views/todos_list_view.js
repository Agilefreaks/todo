define([
  'lodash',
  'jquery',
  'backbone',
  'text!templates/todos_list_view.ejs',
  'views/todo_view'

], function (_, $, Backbone, todosTemplate, TodoView) {
  return Backbone.View.extend({
    tagName: 'ul',
    className: 'list-group',

    onNewModel: function(model){
      this.todoItem = new TodoView({ model: model });
      this.$el.append(this.todoItem.render().$el);
    },

    render: function () {
      var compiledTemplate = ejs.render(todosTemplate, {}, {});
      this.$el.empty();

      this.$el.append(compiledTemplate);
      this.listenTo(this.collection, 'add', this.onNewModel, this);

      return this;
    }
  });
});