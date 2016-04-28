define([
  'jquery',
  'backbone',
  'collections/todo',
  'views/add_view',
  'views/list_todos_view'
], function ($, Backbone, Todos, AddView, ListTodosView) {
  return Backbone.View.extend({

    initialize: function () {
      this.collection = new Todos();
      this.subViews = [
        new AddView({collection: this.collection}),
        new ListTodosView({collection: this.collection})
      ];
    },

    render: function () {
      _.each(this.subViews, function (view) {
        this.$el.append(view.render().$el);
      }.bind(this));

      return this;
    }
  });
});
