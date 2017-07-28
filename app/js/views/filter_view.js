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

    initialize: function (attr) {
      this.options = attr;
      this.listFilter = this.options.listFilter;
    },

    render: function () {
      var todoTemplate = ejs.render(FilterViewTemplate);

      this.$el.append(todoTemplate);
      return this;
    },

    displayAll: function () {
      this.listFilter.setFilterNone();
      this.collection.each(function (todo) { todo.trigger('display'); });

      this.hightlightInput('#displayAll');
    },

    filterDone: function () {
      this.listFilter.setFilterDone();
      this.collection.each(function (todo) { todo.get('done') ? todo.trigger('display') : todo.trigger('hide'); });

      this.hightlightInput('#filter-done');
    },

    filterNotDone: function () {
      this.listFilter.setFilterNotDone();
      this.collection.each(function (todo) { todo.get('done') ? todo.trigger('hide') : todo.trigger('display'); });

      this.hightlightInput('#filter-not-done');
    },

    hightlightInput: function (inputId) {
      this.$('.filters').find('.filter-button').removeClass('active');
      this.$(inputId).addClass('active');
    }

  });
});
