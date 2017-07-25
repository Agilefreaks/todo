define([
  'views/app_view',
  'collections/todoList',
  'ejs'
], function (AppView, TodoList) {
  var appView, subject;

  beforeAll(function () {
    appView = new AppView({collection: new TodoList()});
  });

  afterEach(function () {
    appView.$el.empty();
  });

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        appView.render();
      };
    });

    it('will define app_view', function () {
      subject();
      expect(appView).toBeDefined();
    });

    it('will create addTodos_view', function () {
      var renderSpy = spyOn(appView.addTodoView, 'render').and.callThrough();

      subject();
      expect(renderSpy).toHaveBeenCalled();
    });

    it('will create todoList_view', function () {
      var renderSpy = spyOn(appView.todoListView, 'render').and.callThrough();

      subject();
      expect(renderSpy).toHaveBeenCalled();
    });
  });
});
