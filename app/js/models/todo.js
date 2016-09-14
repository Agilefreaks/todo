define([
  'backbone'
], function (Backbone) {
  var ToDo = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
<<<<<<< HEAD
    },

    changeCompleted: function () {
      this.save({
        completed: !this.get('completed')
      });
=======
>>>>>>> origin/17-display-items
    }
  });

  return ToDo;
});
