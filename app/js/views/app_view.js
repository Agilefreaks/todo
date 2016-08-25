define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'collections/todos',
  'models/todo'
], function ($, Backbone, indexTemplate, TodoCollection, ToDo) {
  return Backbone.View.extend({
    events: {
      'keypress #todo-new-input': 'createNewOnEnter',
      'click #todo-new-button': 'createNewOnClick'
    },

    ENTER_KEY: 13,

    el: this.$('#todo-app'),

    createNewOnEnter: function (e) {
      if (e.which !== this.ENTER_KEY || !$('#todo-new-input').val().trim()) { return; }
      this.addOne();
    },

    createNewOnClick: function () {
      if (!$('#todo-new-input').val().trim()) { return; }
      this.addOne();
    },

    addOne: function () {
      TodoCollection.add(new ToDo({
        title: $('#todo-new-input').val().trim(),
        completed: false
      }));
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
