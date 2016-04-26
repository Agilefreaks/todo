define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'models/todo',
  'collections/todo',
], function ($, Backbone, indexTemplate, Todo, Todos) {
  return Backbone.View.extend({
    el: this.$('#todo-app'),

    initialize: function() {
      this.collection = new Todos();
    },

    events: {
      'submit #add_form': 'Add'
    },

    add: function (e) {
      e.preventDefault();
      var input = $('input[name="name"]').val();
      if(input) {
        var todo = new Todo({name: input});
        this.collection.add(todo);
      }

      //console.log(this.collection);

      return this.collection;
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
