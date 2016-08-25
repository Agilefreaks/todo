define([
  'models/todo',
  'collections/todos'
], function (ToDo, ToDoCollection) {
  var instance, subject;

  beforeEach(function () {
    instance = ToDoCollection;
    subject = function () {
      return instance;
    };
  });

  describe('Collection', function () {
    it('will be defined', function () {
      expect(subject()).toBeDefined();
    });

    it('will be empty', function () {
      var length = 0;

      expect(subject().length).toEqual(length);
    });
  });

  describe('Collection ', function () {
    beforeEach(function () {
      subject().add(new ToDo());
    });

    it('will have one element added', function () {
      var length = 1;

      expect(subject().length).toEqual(length);
    });
  });
});
