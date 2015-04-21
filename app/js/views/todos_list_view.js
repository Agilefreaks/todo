define([
  'lodash',
  'jquery',
  'backbone',
  'text!templates/todos_list_view.ejs'

], function (_, $, Backbone, todosTemplate) {
  return Backbone.View.extend({

    initialize: function() {
      this.listenTo(this.collection, "add", this.render, this);
    },

    render: function () {
      var compiledTemplate = ejs.render(todosTemplate, {collection: this.collection}, {});
      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
