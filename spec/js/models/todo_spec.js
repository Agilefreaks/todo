define([
  'models/todo'
], function (ToDo) {
  var instance, subject;

  beforeEach(function () {
    instance = new ToDo();
    subject = function () {
      return instance;
    };
  });

  describe('Empty ToDo Item', function () {
    it('is with default title', function () {
      expect(subject().get('title')).toMatch('');
    });

    it('is with default completed status', function () {
      expect(subject().get('completed')).toBeFalsy();
    });
  });
});
