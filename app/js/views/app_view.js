define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'collections/todo'
], function ($, Backbone, indexTemplate, todoCollection) {
  return Backbone.View.extend({
    el: $('#todo-app'),
    KEY_ENTER_CODE: 13,

    events: {
      'click #addButton': 'addItemsHandler',
      'keydown #input': 'keyAction'
    },

    addItemsHandler:function(){
      var input = $('#input');
      var newItem = input.value;
      addItems(newItem);
      input.value = "";
    },

    addItems: function(item){
      if(_.trim(item) !== ''){
        this.collection.add({name: item, done: false});
      }
    },

    keyAction: function(e){
      if(e.which === KEY_ENTER_CODE){
        var input = $('#input');
        var newItem = input.value;
        addItems(newItem);
        input.value = "";
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
