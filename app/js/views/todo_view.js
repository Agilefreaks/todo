define([
  'jquery',
  'backbone',
  'text!templates/todo_view.ejs',
  'models/todo'
], function ($, Backbone, ToDoTemplate) {
  return Backbone.View.extend({

    el: this.$('#todo-app'),

    render: function () {
      var compiledTemplate = ejs.render(ToDoTemplate, {view: this, model: this.model}, {});

      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
