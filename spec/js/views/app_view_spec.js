define([
  'views/app_view',
  'collections/todoList',
  'model/todo',
  'ejs'
], function (AppView, TodoList) {
  var appView;

  beforeAll(function () {
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

    it('will not add todo when input is empty', function () {
      var expectedResult = 0;

      appView.$('#new-todo').val();
      subject();

      expect(appView.collection.length).toBe(expectedResult);
    });

    it('will not add todo when input contains spaces', function () {
      var expectedResult = 0;

      appView.$('#new-todo').val(' ');
      subject();

      expect(appView.collection.length).toEqual(expectedResult);
    });

    describe('input has text', function () {
      beforeEach(function () {
        appView.$('#new-todo').val('test ');
      });

      it('will add todo', function () {
        var expectedResult = 1;

        subject();
        expect(appView.collection.length).toEqual(expectedResult);
      });

      it('will clear the input', function () {
        subject();
        expect(appView.$('#new-todo').val()).toEqual('');
      });
    });
  });
});
