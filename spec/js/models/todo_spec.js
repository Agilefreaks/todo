define([
  'model/todo'
], function (ToDo) {
  var todo;

  beforeEach(function () {
    todo = new ToDo();
  });

  describe('empty todo', function () {
    it('has default title', function () {
      expect(todo.get('name')).toMatch('empty');
    });

    it('has default done status', function () {
      expect(todo.get('done')).toBeFalsy();
    });
  });
});
