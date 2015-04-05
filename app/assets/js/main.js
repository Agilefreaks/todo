requirejs.config({
  baseUrl: 'assets/js',
  paths: {
    jquery: '../../vendor/assets/js/jquery',
    lodash: '../../vendor/assets/js/lodash',
    backbone: '../../vendor/assets/js/backbone',
    ejs: '../../vendor/assets/js/ejs'
  },
  map: {
    '*': {
      underscore: 'lodash'
    }
  }
});

requirejs(['app'], function(App) {
  new App().initialize();
});