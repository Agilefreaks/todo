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
      'mouseover': 'showDeleteButton',
      'mouseout': 'hideDeleteButton'
    },

    showDeleteButton: function () {
      this.$('button').addClass('show');
    },

    hideDeleteButton: function () {
      this.$('button').removeClass('show');
    },

    render: function () {
      var compiledTemplate = ejs.render(todoTemplate, {model: this.model}, {});
      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});