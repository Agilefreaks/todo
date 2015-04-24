define([
  'lodash',
  'jquery',
  'backbone',
  'text!templates/todo_view.ejs'
], function (_, $, Backbone, todoTemplate) {
  return Backbone.View.extend({
    tagName: 'li',
    className: 'list-group-item',

    events: {
      'mouseover': 'toggleButtonShow',
      'mouseout': 'toggleButtonShow',
      'click .checkbox': 'checkTodo',
      'click button': 'deleteTodo'
    },

    toggleButtonShow: function () {
      this.$('button').toggleClass('show');
    },

    checkTodo: function(){
      this.model.set({'status': this.$('.checkbox').is(':checked') });
    },

    deleteTodo: function(){
      this.model.set({'isDeleted': true });
    },

    onStatusChange: function () {
      if(this.model.get('isDeleted')){
        this.onDelete();
        return;
      }
      this.$('span').toggleClass('done');
    },

    onDelete: function () {
      this.remove();
    },

    render: function () {
      var compiledTemplate = ejs.render(todoTemplate, {model: this.model}, {});
      this.$el.empty();
      this.$el.append(compiledTemplate);

      this.listenTo(this.model, 'change', this.onStatusChange, this);
      return this;
    }
  });
});