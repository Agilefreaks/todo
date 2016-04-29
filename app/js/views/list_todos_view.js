define([
  'jquery',
  'backbone',
  'views/todo_item_view'
], function ($, Backbone, TodoItemView) {
  var DONE_FILTER_NAME = 'done';
  var NOT_DONE_FILTER_NAME = 'notdone';

  return Backbone.View.extend({

    tagName: 'ul',
    className: 'todos_list',

    initialize: function () {
      this.listenTo(this.collection, 'add', this.renderItem.bind(this));
    },

    renderItem: function (model) {
      var item = new TodoItemView({model: model});

      if (!this.modelIsVisible(model)) {
        return;
      }

      this.$el.append(item.render().$el);
    },

    render: function () {
      if (!this.collection || this.collection.length === 0) { return this; }
      _.each(this.collection.models, this.renderItem.bind(this));

      return this;
    },

    modelIsVisible: function (model) {
      var result;

      switch (this.getCurrentFilter()) {
        case DONE_FILTER_NAME:
          result = model.get('done') && !model.get('removed');
          break;
        case NOT_DONE_FILTER_NAME:
          result = !model.get('done') && !model.get('removed');
          break;
        default:
          result = true;
          break;
      }

      return result;
    },

    getCurrentFilter: function () {
      return Backbone.history.getFragment();
    }
  });
});
