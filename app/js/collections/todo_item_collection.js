define([
    'underscore',
    'backbone',
    'models/todo_item'
], function(_,Backbone,TodoItem){
    return Backbone.Collection.extend({
        model: TodoItem
    });
});