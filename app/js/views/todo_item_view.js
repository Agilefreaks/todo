define([
  'jquery',
  'backbone',
  'text!templates/todo_item_view.ejs'
], function ($, Backbone, itemTemplate) {
  return Backbone.View.extend({

    events: {
      'click .checkbox': 'checkTodo'
    },

    tagName: 'li',
    className: 'row item',

    checkTodo: function () {
      var done = this.model.get('done');

      done ^= 1;

      this.model.set({done: done});
    },

    render: function () {
      var compiledTemplate = ejs.render(itemTemplate, {view: this, name: this.model.get('name')}, {});

      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
