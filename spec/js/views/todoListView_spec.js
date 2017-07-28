define([
  'views/todoList_view',
  'model/todo',
  'collections/todoList',
  'model/filter',
  'ejs'
], function (TodoListView, Todo, TodoList, Filter) {
  var todoListView, subject;

  beforeAll(function () {
    todoListView = new TodoListView({collection: new TodoList(), listFilter: new Filter()});
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

  describe('add', function () {
    var todo;
    var expectedLength = 1;

    beforeEach(function () {
      todo = new Todo({
        name: 'test',
        done: false
      });

      subject = function () {
        todoListView.addTodo(todo);
      };
    });

    it('will add todo_view to todoList_view', function () {
      subject();
      expect(todoListView.$('#todo-view').length).toEqual(expectedLength);
    });

    it('will add todo to collection', function () {
      subject();
      expect(todoListView.collection.findWhere({name: todo.get('name')})).toBeFalsy();
    });
  });
});
