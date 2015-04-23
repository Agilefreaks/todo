define([
  'lodash',
  'jquery',
  'backbone',
  'text!templates/todo_view.ejs'

], function (_, $, Backbone, todoTemplate) {
  return Backbone.View.extend({
    tagName: 'li',
    className: 'list-group-item',

    events: {
      'mouseover': 'toggleButtonShow',
      'mouseout': 'toggleButtonShow'
    },

    toggleButtonShow: function () {
      this.$('button').toggleClass('show');
    },

    render: function () {
      var compiledTemplate = ejs.render(todoTemplate, {model: this.model}, {});
      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});