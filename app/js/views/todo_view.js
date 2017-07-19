define([
  'jquery',
  'backbone',
  'text!templates/todo_view.ejs'
], function ($, Backbone, ToDoTemplate) {
  return Backbone.View.extend({
    events: {
      'click .toggle': 'toggleCompleteStatus',
      'click .delete': 'deleteItem'
    },

    tagName: 'li',
    className: 'todo-view',

    toggleCompleteStatus: function () {
      this.model.changeCompleted();
      this.toggleVisibility();
    },

    toggleVisibility: function () {
      this.model.get('completed') ? this.$('.title').addClass('completed') : this.$('.title').removeClass('completed');
    },

    deleteItem: function () {
      this.model.destroy();
      this.remove();
    },

    render: function () {
      var compiledTemplate = ejs.render(ToDoTemplate, {view: this, model: this.model});

      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
