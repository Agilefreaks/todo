requirejs.config({
  paths: {
    jquery: '/node_modules/jquery/dist/jquery',
    lodash: '/node_modules/lodash/index',
    backbone: '/node_modules/backbone/backbone',
    ejs: '/node_modules/ejs/ejs',
    text: '/node_modules/requirejs-text/text',
    bootstrap: '/node_modules/bootstrap/dist/js/bootstrap.min'
  },

  baseUrl: 'js',

  map: {
    '*': {
      underscore: 'lodash'
    }
  }
});

requirejs([
  'app',
  'ejs'
], function(App) {
  new App().initialize();
});
