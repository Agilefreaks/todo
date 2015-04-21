define([
  'jquery',
  'backbone',
  'text!templates/new_todo_view.ejs',
  'models/todo'
], function ($, Backbone, indexTemplate, Todo) {
  return Backbone.View.extend({
    events: {
      "click input#submit": "addTodo"
    },

    addTodo: function (e) {
      e.preventDefault();

      var val = $('input#title').val();
      var model = new Todo({'title': val});

      this.collection.add(model)
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {}, {});
      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this
    }
  });
});



