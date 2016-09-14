define([
  'backbone'
], function (Backbone) {
  var ToDo = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    },

    changeCompleted: function () {
      this.save({
        completed: !this.get('completed')
      });
    }
  });

  return ToDo;
});
