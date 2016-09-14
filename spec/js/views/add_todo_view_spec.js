define([
  'views/add_todo_view',
  'views/todos_view',
  'models/todo',
  'collections/todos',
  'ejs'
], function (AddToDoView, ToDosView, ToDo, ToDoCollection) {
  var addToDoView;

  beforeEach(function () {
    var toDosView = new ToDosView({model: new ToDoCollection(), el: $('body')});

    addToDoView = new AddToDoView({model: toDosView, el: $('body')});
  });

  function setUp(item) {
    var event = {
      type: 'click',
      preventDefault: function () { }
    };

    addToDoView.render();
    addToDoView.$('#todo-new-input').val(item);
    addToDoView.createNew(event);
  }

  describe('Empty Item', function () {
    beforeEach(function () {
      setUp('');
    });

    it('will not be added to view', function () {
      var expectedValue = 0;

      // either returns undefined or 0, why?
      expect(addToDoView.$('#todo-view').val()).toBeDefined(expectedValue);
    });
  });

  describe('Spaces Item', function () {
    beforeEach(function () {
      setUp('  ');
    });

    it('will not be added to view', function () {
      expect(addToDoView.$('#todo-view').val()).not.toMatch('  ');
    });
  });
});
