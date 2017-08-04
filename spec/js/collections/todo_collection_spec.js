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
      var zero = 0;

      expect(subject().length).toEqual(zero);
    });
  });
});
