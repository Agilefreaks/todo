define([
  'views/todoList_view',
  'model/todo',
  'collections/todoList',
  'ejs'
], function (TodoListView, Todo, TodoList) {
  var todoListView, subject;

  beforeAll(function () {
    todoListView = new TodoListView({collection: new TodoList()});
  });

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        todoListView.render();
      };
    });

    it('will define todo_view', function () {
      subject();
      expect(todoListView).toBeDefined();
    });
  });

  describe('add todo to todoList_view', function () {
    var todo;
    var expectedLength = 1;

    beforeEach(function () {
      expectedLength = 1;
      todo = new Todo({
        name: 'test',
        done: false
      });

      subject = function () {
        todoListView.collection.add(todo);
      };
    });

    it('add todo to todoListView', function () {
      subject();
      expect(todoListView.$('#todo-view').length).toEqual(expectedLength);
    });
  });
});
