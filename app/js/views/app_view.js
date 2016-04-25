define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'models/todo',
  'collections/todo',
], function ($, Backbone, indexTemplate, Todo, Todos) {
  return Backbone.View.extend({
    el: this.$('#todo-app'),

    events: {
      'submit #add_form': 'Add'
    },

    Add: function (e) {
      e.preventDefault();
      var input = $('input[name="name"]').val();
      var inp = "asd";
      if(input) {
        var todo = new Todo({name: input});
        Todos.add(todo);
      }

      return Todos;
    },

    currentDate: function () {
      return new Date();
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
