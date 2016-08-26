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
    it('will have default values', function () {
      expect(subject).toMatch('');
    });
  });
});
