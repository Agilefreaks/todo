define([
    'underscore',
    'backbone'
], function(_,Backbone){
    return Backbone.Model.extend({
        defaults:{
            title: "",
            completed: false
        }
    });
});