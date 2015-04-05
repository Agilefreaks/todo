define(['backbone', 'router'], function (Backbone, Router) {
  return function() {
    this.initialize = function () {
      this.router = new Router();
      Backbone.history.start();
    }
  };
});