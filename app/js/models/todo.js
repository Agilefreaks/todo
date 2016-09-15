define([
  'backbone'
], function (Backbone) {
  var ToDo = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    },

    changeCompleted: function () {
      this.set({completed: !this.get('completed')});
    }
  });

  return ToDo;
});
