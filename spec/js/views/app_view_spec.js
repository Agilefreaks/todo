var CONSTANT_ZERO = 0;

define([
  'views/app_view',
  'ejs'
], function (Index) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index({el: $('body')});
    subject = function () {
      return instance;
    };
  });

  describe('adding new todo', function () {
    beforeEach(function () {
      subject().render();
    });
    it('our todoList should be empty at first render', function () {
      expect(subject().todos.length).toBe(CONSTANT_ZERO);
    });
  });

  describe('adding new todo', function () {
    beforeEach(function () {
      subject().render();
    });

    it('should add it', function () {
      subject().addTodo('asfsa');
      expect(subject().todos.length).not.toBe(CONSTANT_ZERO);
    });

    it("for empty todo it shouldn't add it", function () {
      subject().addTodo('');
      expect(subject().todos.length).toBe(CONSTANT_ZERO);
    });

    it("for todo with full of white spaces, shouldn't add it", function () {
      subject().addTodo('   ');
      expect(subject().todos.length).toBe(CONSTANT_ZERO);
    });
  });
});
