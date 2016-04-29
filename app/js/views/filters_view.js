define([
  'jquery',
  'backbone',
  'text!templates/filters_view.ejs'
], function ($, Backbone, filterTemplate) {
  return Backbone.View.extend({

    tagName: 'div',
    className: 'todo_filters',

    render: function () {
      var compiledTemplate = ejs.render(filterTemplate, {view: this}, {});

      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
