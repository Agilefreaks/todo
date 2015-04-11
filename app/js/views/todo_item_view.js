define([
  'jquery',
  'backbone',
  'text!templates/todo_item_view.ejs'
], function ($, Backbone, ToDoItemTemplate) {
  return Backbone.View.extend({
    tagName: 'li',

    render: function () {
      var compiledTemplate = ejs.render(ToDoItemTemplate, {title: this.model.get('title')}, {});
      this.$el.html(compiledTemplate);
      return this
    }
  });
});
