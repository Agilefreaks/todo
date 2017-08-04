define([
  'models/todo_model'
], function (ToDoModel) {
  var instance, subject;

  beforeEach(function () {
    instance = new ToDoModel();
    subject = function () {
      return instance;
    };
  });

  describe('ToDoModel', function () {
    it('should have a description property', function () {
      expect(subject().has('description')).toBeTruthy();
    });
  });
});
