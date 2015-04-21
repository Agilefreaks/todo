define([
  'views/todos_list_view',
  'collections/todos'
], function (ListView, Todos) {
  var instance, subject, collection;

  beforeEach(function () {
    collection = new Todos();
    instance = new ListView({ collection: collection});
    subject = function () {
      return instance;
    };
  });

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        instance.render();
      }
    });

    it ('render todos list', function () {
      subject();

      expect(instance.$('ul').length).toEqual(1);
    });
  });
});


