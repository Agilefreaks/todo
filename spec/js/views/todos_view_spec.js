define([
  'views/todos_view',
  'models/todo',
  'collections/todos',
  'ejs'
], function (ToDosView, ToDo, ToDoCollection) {
  var instance, subject;

  beforeEach(function () {
    instance = new ToDosView({el: '<div>', collection: new ToDoCollection()});
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

    afterEach(function () {
      instance.collection.reset();
    });

    it('appends a new list item to list', function () {
      var expectedLength = 1;

      subject();

      expect(instance.$('.todo-view').length).toEqual(expectedLength);
    });
  });

  describe('Render', function () {
    var toDoItem;

    beforeEach(function () {
      toDoItem = new ToDo({
        title: 'Test',
        completed: false
      });

      instance.stopListening();
      instance.collection.add(toDoItem);

      subject = function () {
        instance.render();
      };
    });

    it('is called', function () {
      var renderSpy = spyOn(instance, 'render').and.callThrough();

      subject();

      expect(renderSpy).toHaveBeenCalled();
    });

    it('adds item from collection to view', function () {
      var expectedLength = 1;

      subject();

      expect(instance.$('.todo-view').length).toEqual(expectedLength);
    });
  });
});
