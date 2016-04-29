define([
  'jquery',
  'backbone',
  'text!templates/todo_item_view.ejs'
], function ($, Backbone, itemTemplate) {
  return Backbone.View.extend({

    events: {
      'click .checkbox': 'checkTodo',
      'click .remove_btn': 'removeTodo'
    },

    tagName: 'li',
    className: 'row item',

    initialize: function () {
      if (this.model.get('removed') === true) {
        this.$el.addClass('removed');
      }
    },

    checkTodo: function () {
      var done = this.model.get('done');

      done = !done;

      this.$el.toggleClass('checked');
      this.model.set({done: done});
    },

    removeTodo: function () {
      var removed = this.model.get('removed');

      removed = !removed;

      this.$el.toggleClass('removed');
      this.$el.html('This todo was removed');
      this.model.set({removed: removed});
    },

    render: function () {
      var compiledTemplate = ejs.render(itemTemplate, {view: this, name: this.model.get('name')}, {});

      if (this.model.get('removed')) { this.$el.html('This todo was removed'); return this; }

      this.$el.append(compiledTemplate);

      if (this.model.get('done') === true) {
        $(this.$el.find('.checkbox')).prop('checked', true);
        this.$el.addClass('checked');
      }

      return this;
    }
  });
});
