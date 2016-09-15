define([
  'views/todos_view',
  'models/todo',
  'collections/todos',
  'ejs'
], function (ToDosView, ToDo, ToDoCollection) {
  var instance, subject;

  beforeEach(function () {
    instance = new ToDosView({collection: new ToDoCollection()});
    subject = function () {
      return instance;
    };
  });

  afterEach(function () {
    instance.$el.empty();
  });

  describe('item is added to collection', function () {
    var toDoItem;

    beforeEach(function () {
      toDoItem = new ToDo({
        title: 'Test',
        completed: false
      });

      subject = function () {
        instance.collection.add(toDoItem);
      };
    });

    it('appends a new list item to list', function () {
      var expectedLength = 1;

      subject();

      expect(instance.$('.todo-view').length).toEqual(expectedLength);
    });
  });
});
