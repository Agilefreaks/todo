define([
  'views/app_view',
  'collections/todoList',
  'model/todo',
  'ejs'
], function (AppView, TodoList) {
  var appView;

  beforeEach(function () {
    appView = new AppView({
      el: $("<div><input id='new-todo' type='text' value='' /></div>"),
      collection: new TodoList()
    });
  });

  describe('when app_view is constructing', function () {
    it('will create app_view', function () {
      expect(appView).toBeDefined();
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
        appView.addTodo(event);
      };
    });

    describe('input is empty', function () {
      it('will not add todo', function () {
        var expectedResult = 0;

        subject();
        expect(appView.collection.length).toBe(expectedResult);
      });
    });

    describe('input has empty spaces', function () {
      it('will not add todo', function () {
        var expectedResult = 0;

        appView.$('#new-todo').val(' ');
        subject();
        expect(appView.collection.length).toEqual(expectedResult);
      });
    });

    describe('input has text', function () {
      it('will add todo', function () {
        var expectedResult = 1;

        appView.$('#new-todo').val('test');
        subject();
        expect(appView.collection.length).toEqual(expectedResult);
      });
    });
  });
});
