define([
  'jquery',
  'backbone',
  'collections/todos',
  'views/new_todo_view',
  'views/todos_list_view'
], function ($, Backbone, Todos, NewTodoView,  ListView) {
  return Backbone.View.extend({
    el: $('#todo-app'),
    collection: new Todos(),

    initialize: function() {
      this.todoView = new NewTodoView({ collection: this.collection });
      this.listView = new ListView({ collection: this.collection });
    },

    render: function () {
      this.$el.empty();

      this.$el.append(this.todoView.render().$el);
      this.$el.append(this.listView.render().$el);

      return this;
    }
  });
});