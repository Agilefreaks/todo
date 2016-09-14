define([
  'views/todos_view',
  'models/todo',
  'collections/todos',
  'ejs'
], function (ToDosView, ToDo, ToDoCollection) {
  var instance, subject;

  beforeEach(function () {
    instance = new ToDosView({model: new ToDoCollection(), el: $('body')});
    subject = function () {
      return instance;
    };
  });

  describe('Item', function () {
    beforeEach(function () {
      var toDoItem = new ToDo({
        title: 'Test',
        completed: false
      });

      subject().addOne(toDoItem);
    });

    it('will be added to collection', function () {
      var expectedLength = 1;
      var list = _.map(subject().model, function (val) {
        return {id: val};
      });
      var collection = new ToDoCollection(list);

      expect(collection.length).toBe(expectedLength);
    });

    it('will be displayed', function () {
      expect(subject().$el.find('#todo-list')).toBeDefined();
    });
  });
});
