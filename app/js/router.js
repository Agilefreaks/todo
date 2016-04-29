define([
  'backbone',
  'views/app_view'
], function (Backbone, AppView) {
  var Router = Backbone.Router.extend({
    routes: {
      '(?:params)': 'index',
      'all': 'index',
      'done': 'index',
      'notdone': 'index'
    },

    index: function () {
      var appView = new AppView();

      this.renderPage(appView);
    },

    renderPage: function (page) {
      $('body').empty();
      $('body').append(page.render().$el);
    }
  },
    {
      initialize: function () {
        return new Router();
      }
    });

  return Router;
});
