define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'collections/todos',
  'models/todo'
], function ($, Backbone, indexTemplate, ToDoCollection, ToDo) {
  return Backbone.View.extend({
    events: {
      submit: 'createNew'
    },

    ENTER_KEY: 13,

    el: this.$('#todo-app'),

    createNew: function (e) {
      var inputValue = this.input.val().trim();

      e.preventDefault();

      if (!inputValue) { return; }
      this.addOne(new ToDo(inputValue));
      this.input.val('');
    },

    addOne: function (ToDoItem) {
      ToDoCollection.add(ToDoItem);
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      this.input = this.$el.find('#todo-new-input');
      return this;
    }
  });
});
