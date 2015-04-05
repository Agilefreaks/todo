// Karma configuration
// Generated on Sun Apr 05 2015 22:10:43 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-html-reporter',
      'karma-teamcity-reporter',
      'karma-coverage',
      'karma-requirejs'
    ],

    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],

    preprocessors: {
      'app/assets/js/**/*.js': ['coverage']
    },

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'app/vendor/assets/js/**/*.js', included: false},
      {pattern: 'app/assets/js/**/*.js', included: false},
      {pattern: 'spec/**/*spec.js', included: false},
      'spec/test_main.js'
    ],


    // list of files to exclude
    exclude: [
      'app/assets/js/main.js',
      'spec/*.conf.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'html'], // to use coverage, replace `html` with `coverage`


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    htmlReporter: {
      outputDir: 'results'
    },

    coverageReporter: {
      type : 'html',
      dir : 'spec/coverage'
    }
  });
};
