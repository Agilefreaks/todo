define([
  'views/app_view',
  'ejs'
], function (Index) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index({el: $('body')});
    subject = function () {
      return instance;
    };
  });

  describe('Add ToDo view object', function () {
    it('will be defined', function () {
      expect(subject().addToDoView).toBeDefined();
    });
  });

  describe('ToDo view list', function () {
    it('will be defined', function () {
      expect(subject().toDosView).toBeDefined();
    });
  });

  describe('Render', function () {
    it('will have created input form', function () {
      subject().render();
      expect(subject().$el.find('.input-form')).toBeDefined();
    });
  });
});
