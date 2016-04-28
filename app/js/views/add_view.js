define([
  'jquery',
  'backbone',
  'text!templates/add_view.ejs',
  'models/todo'
], function ($, Backbone, addViewTemplate, Todo) {
  return Backbone.View.extend({

    events: {
      'submit #add_form': 'add'
    },

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
      var compiledTemplate = ejs.render(addViewTemplate, {}, {});

      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
