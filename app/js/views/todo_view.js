define([
  'jquery',
  'backbone',
  'text!templates/todo_view.ejs'
], function ($, Backbone, todoTemplate) {
  return Backbone.View.extend({
    el: this.$('#todoList'),

    render: function () {
      var compiledTemplate;

      compiledTemplate = ejs.render(todoTemplate, {view: this, model: this.model}, {});
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
