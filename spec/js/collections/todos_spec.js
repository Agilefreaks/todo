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
      expect(subject().length).toEqual(0);
    });
  });

  describe('Collection ', function () {

    beforeEach(function () {
      subject().add(new ToDo())
    });

    it('will have one element added', function () {
      expect(subject().length).toEqual(1);
    });
  });
});
