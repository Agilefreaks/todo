define([
  'models/todo',
  'ejs'
], function (TodoModel) {
  var instance, subject;

  beforeEach(function () {
    instance = new TodoModel();
    subject = function () {
      return instance;
    };
  });

  describe('todo model', function () {
    it('check if model was created', function () {
      expect(subject()).toBeDefined();
    });

    it('check model defaults', function () {
      expect(subject().get('name')).toBeDefined();
      expect(subject().get('done')).toBeDefined();
      expect(subject().get('removed')).toBeDefined();
    });
  });
});
