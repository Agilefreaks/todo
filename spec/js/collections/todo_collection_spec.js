define([
  'collections/todo_collection'
], function (TodoCollection) {
  var instance, subject;

  beforeEach(function () {
    instance = new TodoCollection();
    subject = function () {
      return instance;
    };
  });

  describe('TodoCollection', function () {
    it('should be initially empty', function () {
      expect(subject().length).toEqual(0);
    });
  });
});
