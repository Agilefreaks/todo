define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'collections/todo'
], function ($, Backbone, indexTemplate, todoCollection) {
  return Backbone.View.extend({
    el: $('#todo-app'),
    input: $('#input'),

    events: {
      'click #addButton': 'addItems',
      'keydown #input': 'keyAction'
    },

    addItems: function(){
      var newItem = input.value;
      if(_.trim(newItem) !== ""){
        this.collection.add({name: newItem, done: false});
      }
      input.value = "";
    },

    keyAction: function(e){
      if(e.which === 13){
        this.addItems();
      }
    },


    render: function () {
      this.collection = new todoCollection();
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});
      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this
    }
  });
});
