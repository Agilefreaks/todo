/**
 * Created by Agile on 07/04/2015.
 */
define([
    'jquery',
    'backbone',
    'model/todo'
],
  function ($, Backbone, ToDo) {
      return Backbone.Collection.extend({
          model: ToDo
      });
  });