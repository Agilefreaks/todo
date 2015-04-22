define([
  'lodash',
  'jquery',
  'backbone',
  'text!templates/todo_view.ejs'

], function (_, $, Backbone, todoTemplate) {
  return Backbone.View.extend({
   
    render: function () {
      var compiledTemplate = ejs.render(todoTemplate, {model: this.model}, {});
      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});