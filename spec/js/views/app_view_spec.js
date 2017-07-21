define([
  'views/app_view',
  'collections/todoList',
  'model/todo'
], function (AppView, TodoList, Todo) {
  var app_view, subject;

  beforeEach(function () {
    app_view = new AppView({
      el: $("<div><input id='new-todo' type='test' value='test' /></div>"),
      collection: new TodoList()
    });
  });

  describe('when app_view is constructing', function () {
    it('will create app_view', function () {
      expect(app_view).toBeDefined();
    });
  });

  describe('render', function () {
    it('will get rendered', function () {
      app_view.render();
      expect(app_view.$('#new-todo').length).toBe(1);
    });
  });

  describe('createOnButtonClick', function () {
    beforeEach(function () {
      app_view.createOnButtonClick();
    });

    it('will add Todo item to the view TodoList collection', function () {
      expect(app_view.collection.length).toEqual(1);
    });
  });

});
