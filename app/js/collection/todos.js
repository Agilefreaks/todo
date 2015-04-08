/**
 * Created by Agile on 07/04/2015.
 */
define([
    'backbone',
    'model/todo'
  ],
  function (Backbone, ToDo) {
    return Backbone.Collection.extend({
      model: ToDo
    });
  });