define([
  'jquery',
  'backbone',
  'text!templates/todo_view.ejs',
  'common'
], function ($, Backbone, ToDoTemplate, Common) {
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
      this.$('.title').toggleClass('completed', this.model.get('completed'));

      if (Common.ToDoFilter === 'done') {
        this.$el.toggleClass('hidden', !this.model.get('completed'));
      } else if (Common.ToDoFilter === 'notdone') {
        this.$el.toggleClass('hidden', this.model.get('completed'));
      }
    },

    deleteItem: function () {
      this.model.destroy();
      this.remove();
    },

    render: function () {
      var compiledTemplate = ejs.render(ToDoTemplate, {view: this, model: this.model});

      this.$el.append(compiledTemplate);

      this.toggleVisibility();
      return this;
    }
  });
});
