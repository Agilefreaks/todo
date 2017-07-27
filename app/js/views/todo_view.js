define([
  'jquery',
  'backbone',
  'text!templates/todo_view.ejs'
], function ($, Backbone, TodoTemplate) {
  return Backbone.View.extend({
    events: {
      'click #toggle': 'toggleTodo',
      'click #delete': 'delete'
    },

    initialize: function () {
      this.listenTo(this.model, 'destroy', this.remove);
      this.listenTo(this.model, 'remove', this.remove);
      this.listenTo(this.model, 'display', this.display);
      this.listenTo(this.model, 'hide', this.hide);
    },

    tagName: 'li',
    id: 'todo-view',

    render: function () {
      var todoTemplate = ejs.render(TodoTemplate, {view: this, model: this.model});

      this.$el.html(todoTemplate);
      return this;
    },

    toggleTodo: function () {
      this.model.toggle();
      this.$('#name').toggleClass('done', this.model.get('done'));
    },

    delete: function () {
      this.model.destroy();
    },

    display: function () {
      this.$el.show();
    },

    hide: function () {
      this.$el.hide();
    }
  });
});
