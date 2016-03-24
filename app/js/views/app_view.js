define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'model/model',
  'collection/collection'
], function ($, Backbone, indexTemplate, model, collection){
  return Backbone.View.extend({
    el: this.$('#todo-app'),

    events:{
      "click #button" : "createOnClick",
    },
    
    initialize:function(){
      this.collection= new collection();
    },

    createOnClick:function(){
      var value;
      value=$('input').val;
        if(value!=''){
           this.collection.add(new model());
        }
     },
/*
    createOnEnter: function(e) {
      if (e.keyCode != 13) return;
      if (!this.input.val()) return;

      Todos.create({title: this.input.val()});
      this.input.val('');
    },
*/
    render: function () {
      var compiledTemplate = ejs.render(indexTemplate,{View:this ,model:this.model},{});  
      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    },
  });
});
