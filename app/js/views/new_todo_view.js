define([
  'jquery',
  'backbone',
  'text!templates/new_todo_view.ejs',
  'model/todo',
], function ($, Backbone, newToDoTemplate, ToDo) {
  return Backbone.View.extend({
    events: {
      'click #newToDo': 'onNewTodoClicked'
    },

    render: function () {
      var compiledTemplate = ejs.render(newToDoTemplate, {}, {});
      this.$el.html(compiledTemplate);
      return this
    },

    onNewTodoClicked: function (e) {
      e && e.preventDefault();
      var value = this.$('input[type="text"]').val();
      if (!/\S/.test(value)) {
        return;
      }

      this.model.add(new ToDo({title: value}));
      this.$('input[type="text"]').val('');
    }
  });
});
