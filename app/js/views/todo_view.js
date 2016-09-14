define([
  'jquery',
  'backbone',
  'text!templates/todo_view.ejs',
  'models/todo'
<<<<<<< HEAD
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
=======
], function ($, Backbone, ToDoTemplate) {
  return Backbone.View.extend({

    el: this.$('#todo-app'),

    render: function () {
      var compiledTemplate = ejs.render(ToDoTemplate, {view: this, model: this.model}, {});
>>>>>>> origin/17-display-items

      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
