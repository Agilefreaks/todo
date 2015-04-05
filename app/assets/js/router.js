define(['backbone'], function (Backbone) {
  return Backbone.Router.extend({
    routes: {
      "(?:params)": "index"
    },

    initialize: function() {
      this.body = $('body');
    },

    index: function() {
      this.renderView('index');
    },

    renderView: function(viewModuleName) {
      var self = this;
      require(['views/' + viewModuleName], function(View) {
        var view = new View();
        self.body.empty();
        self.body.append(view.$el);
        view.render();
      });
    }
  });
});