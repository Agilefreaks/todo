define([
  'model/todo',
  'ejs'
], function (ToDo) {
  var todo;

  beforeEach(function () {
    todo = new ToDo();
  });

  describe('empty todo_view.ejs', function () {
    it('has default title', function () {
      expect(todo.get('name')).toMatch('empty');
    });

    it('has default done status', function () {
      expect(todo.get('done')).toBeFalsy();
    });
  });
});
