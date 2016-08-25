define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'collections/todos',
  'models/todo'
], function ($, Backbone, indexTemplate, TodoCollection, ToDo) {
  return Backbone.View.extend({
    el: this.$('#todo-app'),

    events:{
      'keypress #todo-new-input' : 'createNewOnEnter',
      'click #todo-new-button' : 'createNewOnClick'
    },


    createNewOnEnter: function (e) {
      if(e.which !== 13 || !$('#todo-new-input').val().trim()) { return;}
      this.addOne();
    },

    createNewOnClick: function (e) {
      if(!$('#todo-new-input').val().trim()) { return;}
      this.addOne();
    },

    addOne: function () {
      TodoCollection.add(new ToDo({
        title: $('#todo-new-input').val().trim(),
        completed: false
      }));
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
