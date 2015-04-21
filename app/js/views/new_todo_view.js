define([
  'lodash',
  'jquery',
  'backbone',
  'text!templates/new_todo_view.ejs',
  'models/todo',
  'collections/todos'
], function (_, $, Backbone, todoTemplate, Todo, Todos) {
  return Backbone.View.extend({
    events: {
      'click input#submit': 'addTodo'
    },

    initialize: function() {
      this.collection = new Todos();
    },

    $title: function () {
      return this.$el.find('#title')
    },

    addTodo: function (e) {
      e.preventDefault();

      var val = this.$title().val();
      if (_.trim(val) == '') {
        return
      }

      var model = new Todo({'title': val});
      this.collection.add(model);
      this.$title().val('');
    },

    render: function () {
      var compiledTemplate = ejs.render(todoTemplate, {}, {});
      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
