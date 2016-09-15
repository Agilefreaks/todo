define([
  'views/todos_view',
  'models/todo',
  'collections/todos',
  'ejs'
], function (ToDosView, ToDo, ToDoCollection) {
  var instance, subject;

  beforeEach(function () {
    instance = new ToDosView({collection: new ToDoCollection(), el: $('body')});
    subject = function () {
      return instance;
    };
  });

  beforeEach(function () {
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

      expect(instance.$el.find('#todo-view').length).toEqual(expectedLength);
    });
  });
});
