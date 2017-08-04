define([
  'backbone'
], function (Backbone) {
  return Backbone.Model.extend({
    defaults: {
      description: ''
    }

    /*emptyItem: function () {
      return {
        header: 'empty',
        done: false
      };
    }*/
  });
});
