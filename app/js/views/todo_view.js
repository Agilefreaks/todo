define([
  'jquery',
  'backbone',
  'text!templates/todo_view.ejs'
], function ($, Backbone, ToDoTemplate) {
  return Backbone.View.extend({
    events: {
      'click .toggle': 'toggleCompleteStatus'
    },

    tagName: 'li',
    className: 'todo-view',

    toggleCompleteStatus: function () {
      this.model.changeCompleted();
    },

    render: function () {
      var compiledTemplate = ejs.render(ToDoTemplate, {view: this, model: this.model});

      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
