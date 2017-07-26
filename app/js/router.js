define([
  'backbone',
  'views/appView',
  'collections/todoList'
], function (Backbone, AppView, TodoList) {
  var Router = Backbone.Router.extend({
    routes: {
      '(?:params)': 'index'
    },

    index: function () {
      var appView = new AppView({collection: new TodoList()});

      appView.render();
    }
  },
    {
      initialize: function () {
        return new Router();
      }
    });

  return Router;
});
