requirejs.config({
  paths: {
    jquery: '/node_modules/jquery/dist/jquery',
    lodash: '/node_modules/lodash/index',
    backbone: '/node_modules/backbone/backbone',
    ejs: '/node_modules/ejs/ejs',
    text: '/node_modules/requirejs-text/text'
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
], function (App) {
  new App().initialize();
});
