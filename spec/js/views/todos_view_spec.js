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
    subject().$el.empty();
  });

  describe('Item', function () {
    beforeEach(function () {
      var toDoItem = new ToDo({
        title: 'Test',
        completed: false
      });

      subject().collection.add(toDoItem);
    });

    it('will be displayed', function () {
      expect(subject().$el.find('#todo-list')).toBeDefined();
    });
  });
});
