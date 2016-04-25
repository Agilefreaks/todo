define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'models/todo',
  'collections/todo'
], function ($, Backbone, indexTemplate, Todo, Todos) {
  return Backbone.View.extend({

    events: {
      'submit #add_form': 'add'
    },

    initialize: function () {
      this.collection = new Todos();
    },

    el: this.$('#todo-app'),

    add: function (e) {
      var todo,
        input = $('input[name="name"]');

      e.preventDefault();

      if (!input.val()) {
        return this.collection;
      }

      todo = new Todo({name: input.val()});
      this.collection.add(todo);
      input.val('');

      return this.collection;
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
