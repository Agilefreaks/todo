define([
  'backbone',
  'views/add_view',
  'views/list_todos_view',
  'views/filters_view',
  'services/todo_provider'
], function (Backbone, AddView, ListTodosView, FiltersView, ToDoProvider) {
  return Backbone.View.extend({

    initialize: function () {
      this.populateData();
      this.subViews = [
        new AddView({collection: this.collection}),
        new FiltersView(),
        new ListTodosView({collection: this.collection})
      ];
    },

    populateData: function () {
      this.collection = ToDoProvider.instance().getAllToDos();
    },

    render: function () {
      _.each(this.subViews, function (view) {
        this.$el.append(view.render().$el);
      }.bind(this));

      return this;
    }
  });
});
