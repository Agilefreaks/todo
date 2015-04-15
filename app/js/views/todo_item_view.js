define([
  'jquery',
  'backbone',
  'text!templates/todo_item_view.ejs'
], function ($, Backbone, ToDoItemTemplate) {
  return Backbone.View.extend({
    tagName: 'li',

    events: {
      'click #btnDelete': 'delete',
      'change #checkboxdone': 'toggle'
    },

    render: function () {
      var compiledTemplate = ejs.render(ToDoItemTemplate, {title: this.model.get('title')}, {});
      this.$el.html(compiledTemplate);
      return this
    },

    delete: function () {
      this.model.destroy();
      this.remove();
    },

    toggle: function () {
      this.model.set('done', !this.model.get('done'));
      this.$('label').toggleClass('line-through');
    }
  });
});
