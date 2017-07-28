define([
  'views/todo_view',
  'model/todo',
  'collections/todoList',
  'ejs'
], function (TodoView, Todo, TodoList) {
  var todoView, subject, model;

  beforeEach(function () {
    model = new Todo({name: 'test', done: false});

    todoView = new TodoView({model: model});
    todoView.render();
  });

  afterEach(function () {
    todoView.$el.empty();
  });

  describe('render', function () {
    var expectedLength = 1;

    it('will define todo_view', function () {
      expect(todoView).toBeDefined();
    });

    it('will create checkbox', function () {
      expect(todoView.$('#toggle').length).toBe(expectedLength);
    });

    it('will create name input', function () {
      expect(todoView.$el.find('#name').length).toBe(expectedLength);
    });

    it('will create delete button', function () {
      expect(todoView.$el.find('#delete').length).toBe(expectedLength);
    });
  });

  describe('toggle clicked', function () {
    beforeEach(function () {
      subject = function () {
        todoView.toggleTodo();
      };
    });

    it('will modify model done status', function () {
      subject();
      expect(todoView.model.get('done')).toBeTruthy();
    });
  });

  describe('delete', function () {
    var todoList = new TodoList();

    beforeEach(function () {
      subject = function () {
        todoView.delete();
      };
    });

    it('will remove model from collection ', function () {
      var expectedResult = 0;

      todoList.add(todoView.model);
      subject();
      expect(todoList.length).toBe(expectedResult);
    });

    it('will remove todo_view from todoList_view ', function () {
      var testList = $('<ul></ul>').append(todoView.$el);

      subject();
      expect($.contains(testList, todoView.$el)).toBeFalsy();
    });
  });
});
