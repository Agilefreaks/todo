define([
  'jquery',
  'backbone',
  'text!templates/todo_view.ejs',
  'models/todo'
], function ($, Backbone, ToDoTemplate, ToDo) {
  return Backbone.View.extend({
    events: {
      'click .toggle': 'toggleCompleteStatus'
    },

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
