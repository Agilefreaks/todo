define([
  'views/addTodo_view',
  'collections/todoList',
  'ejs'
], function (AddTodoView, TodoList) {
  var addTodoView;

  beforeAll(function () {
    addTodoView = new AddTodoView({
      el: $("<div><input id='new-todo' type='text' value='' /></div>"),
      collection: new TodoList()
    });
  });

  describe('when app_view is constructing', function () {
    it('will create addTodo_view', function () {
      expect(addTodoView).toBeDefined();
    });
  });

  describe('addTodo', function () {
    var event, subject;

    beforeEach(function () {
      event = {
        type: 'submit',
        preventDefault: function () {
        }
      };

      subject = function () {
        addTodoView.addTodo(event);
      };
    });

    it('will not add todo_view.ejs when input is empty', function () {
      var expectedResult = 0;

      addTodoView.$('#new-todo_view.ejs').val();
      subject();

      expect(addTodoView.collection.length).toBe(expectedResult);
    });

    it('will not add todo_view.ejs when input contains spaces', function () {
      var expectedResult = 0;

      addTodoView.$('#new-todo_view.ejs').val(' ');
      subject();

      expect(addTodoView.collection.length).toEqual(expectedResult);
    });

    describe('input has text', function () {
      beforeEach(function () {
        addTodoView.$('#new-todo_view.ejs').val('test ');
      });

      it('will add todo_view.ejs', function () {
        var expectedResult = 1;

        subject();
        expect(addTodoView.collection.length).toEqual(expectedResult);
      });

      it('will clear the input', function () {
        subject();
        expect(addTodoView.$('#new-todo_view.ejs').val()).toEqual('');
      });
    });
  });
});
