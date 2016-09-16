define([
  'backbone',
  'views/app_view',
  'collections/todos',
  'common'
], function (Backbone, AppView, ToDoCollection, Common) {
  var Router = Backbone.Router.extend({
    routes: {
      '*filter': 'index'
    },

    collection: new ToDoCollection(),

    index: function (filter) {
      var appView = new AppView({collection: this.collection});

      Common.ToDoFilter = filter || '';

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
