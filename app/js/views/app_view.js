var KEY_ENTER_CODE = 13;

define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'collections/todoCollection'
], function ($, Backbone, indexTemplate, TodoCollection) {
  return Backbone.View.extend({
    events: {
      'click #addButton': 'onAddButtonClick',
      'keydown #input': 'onKeyDown'
    },

    initialize: function () {
      this.todoCollection = new TodoCollection();
    },

    el: this.$('#todo-app'),

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    },

    onAddButtonClick: function () {
      var input = this.$('#input');

      var newItem = input.val();

      this.addItems(newItem);
      input.val('');
    },

    addItems: function (item) {
      var newItem;

      if (_.isEmpty(_.trim(item))) {
        return;
      }
      newItem = {name: item, done: false};
      this.todoCollection.add(newItem);
    },

    onKeyDown: function (e) {
      if (e.which !== KEY_ENTER_CODE) {
        return;
      }
      e.preventDefault();
      this.onAddButtonClick();
    }
  });
});
