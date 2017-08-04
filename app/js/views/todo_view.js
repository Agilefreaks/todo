define([
  'jquery',
  'backbone',
  'text!templates/todo_view.ejs'
], function ($, Backbone, template) {
  return Backbone.View.extend({
    tagName: 'li',

    render: function () {
      var compiledTemplate = ejs.render(template, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    },

    description: function () {
      return this.model.get('description');
    }
  });
});
