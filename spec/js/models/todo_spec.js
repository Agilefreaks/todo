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
    var expectedResult = new ToDo();

    it('will have default title', function () {
      expect(subject.title).toEqual(expectedResult.title);
    });

    it('will have default completed status', function () {
      expect(subject.completed).toBeFalsy();
    });
  });
});
