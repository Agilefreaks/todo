define([
  'views/todoView',
  'model/todo',
  'collections/todoList',
  'views/todoListView',
  'ejs'
], function (TodoView, Todo, TodoList, TodoListView) {
  var todoView, subject, model;

  beforeAll(function () {
    model = new Todo({name: 'test', done: false});
    todoView = new TodoView({model: model});
  });

  afterEach(function () {
    todoView.$el.empty();
  });

  describe('render', function () {
    var expectedLength;

    beforeEach(function () {
      expectedLength = 1;
      subject = function () {
        todoView.render();
      };
    });

    it('will define todo_view', function () {
      subject();
      expect(todoView).toBeDefined();
    });

    it('will create checkbox', function () {
      subject();
      expect(todoView.$('#toggle').length).toBe(expectedLength);
    });

    it('will create name input', function () {
      subject();
      expect(todoView.$el.find('#name').length).toBe(expectedLength);
    });

    it('will create delete button', function () {
      subject();
      expect(todoView.$el.find('#delete').length).toBe(expectedLength);
    });
  });

  describe('toggle clicked', function () {
    beforeEach(function () {
      subject = function () {
        todoView.render();
        todoView.toggleTodo();
      };
    });

    it('will modify model done status', function () {
      subject();
      expect(todoView.model.get('done')).toBeTruthy();
    });
  });

  describe('delete', function () {
    var todoListView = new TodoListView({collection: new TodoList(), el: $('<ul></ul>')}).render();

    beforeEach(function () {
      subject = function () {
        todoView.delete();
      };
    });

    it('will remove model collection ', function () {
      var expectedResult = 0;

      todoListView.collection.add(todoView.model);

      subject();
      expect(todoListView.collection.length).toBe(expectedResult);
    });

    it('will remove todo_view from todoList_view ', function () {
      todoListView.$el.append(todoView.$el);

      subject();
      expect($.contains(todoListView.$el, todoView.$el)).toBeFalsy();
    });
  });
});
