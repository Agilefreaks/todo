define([
  'jquery',
  'backbone',
  'text!templates/todo_view.ejs'
], function ($, Backbone, TodoTemplate) {
  return Backbone.View.extend({
    events: {
      'click #toggle': 'toggleTodo'
    },

    tagName: 'li',
    id: 'todo-view',

    render: function () {
      var todoTemplate = ejs.render(TodoTemplate, {view: this, model: this.model});

      this.$el.append(todoTemplate);
      return this;
    },

    toggleTodo: function () {
      this.model.toggle();
    }
  });
});
