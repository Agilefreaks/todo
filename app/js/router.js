define([
  'backbone',
  'views/app_view',
  'collections/todos'
], function (Backbone, AppView, ToDoCollection) {
  var Router = Backbone.Router.extend({
    routes: {
      '(?:params)': 'index'
    },

    index: function () {
      var appView = new AppView({collection: new ToDoCollection()});

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
