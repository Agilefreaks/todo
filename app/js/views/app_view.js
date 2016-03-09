@const KEY_ENTER_CODE = 13;

define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'collections/todo'
], function ($, Backbone, indexTemplate, todoCollection) {
  return Backbone.View.extend({
    el: $('#todo-app'),
    myCollection: Object,

    events: {
      'click #addButton': 'onAddButtonClick',
      'keydown #input': 'onKeyDown'
    },

    onAddButtonClick: function () {
      var input = this.$('#input');
      var newItem = input.val();
      this.addItems(newItem);
      input.val('');
    },

    addItems: function (item) {
      if(!_.isEmpty(_.trim(item))){
        var newItem = {
          name: item,
          done: false
        };
        this.myCollection.add(newItem);
      }
    },

    onKeyDown: function (e) {
      if(e.which === KEY_ENTER_CODE){
        this.onAddButtonClick();
      }
    },


    render: function () {
      this.myCollection = new todoCollection();
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});
      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this
    }
  });
});
