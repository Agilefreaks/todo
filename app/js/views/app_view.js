define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs'
], function ($, Backbone, indexTemplate) {
  return Backbone.View.extend({
    el: this.$('#todo-app'),

    events:{
      'keypress .todo-new-input' : 'createNewOnEnter',
      'click .todo-new-button' : 'createNewOnClick'
    },

    createNewOnEnter: function (e) {
      throw new Error('Not implemented');
    },

    createNewOnClick: function (e) {
      throw new Error('Not implemented');
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
