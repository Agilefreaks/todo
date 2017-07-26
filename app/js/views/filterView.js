define([
  'jquery',
  'backbone',
  'text!templates/filter_view.ejs',
  'model/todo'
], function ($, Backbone, FilterViewTemplate) {
  return Backbone.View.extend({
    events: {
      'click #displayAll': 'displayAll',
      'click #filter-done': 'filterDone',
      'click #filter-not-done': 'filterNotDone'
    },

    render: function () {
      var todoTemplate = ejs.render(FilterViewTemplate);

      this.$el.append(todoTemplate);
      return this;
    },

    displayAll: function () {
      this.collection.each(function (todo) { todo.trigger('display'); });
    },

    filterDone: function () {
      this.collection.each(function (todo) { todo.get('done') ? todo.trigger('display') : todo.trigger('hide'); });
    },

    filterNotDone: function () {
      this.collection.each(function (todo) { todo.get('done') ? todo.trigger('hide') : todo.trigger('display'); });
    }
  });
});
