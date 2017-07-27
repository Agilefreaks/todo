define([
  'views/filter_view',
  'model/filter',
  'collections/todoList',
  'ejs'
], function (FilterView, Filter, TodoList) {
  var filterView;

  beforeEach(function () {
    filterView = new FilterView({
      collection: new TodoList([
        {name: 'test1', done: false},
        {name: 'test2', done: false},
        {name: 'test3', done: true}
      ]),
      listFilter: new Filter()
    });
    filterView.render();
  });

  describe('render', function () {
    var expectedLength = 1;

    it('will define app_view', function () {
      expect(filterView).toBeDefined();
    });

    it('will create displayAll', function () {
      expect(filterView.$('#displayAll').length).toBe(expectedLength);
    });

    it('will create filter-done', function () {
      expect(filterView.$('#filter-done').length).toBe(expectedLength);
    });

    it('will create filter-not-done', function () {
      expect(filterView.$('#filter-not-done').length).toBe(expectedLength);
    });
  });

  describe('filterNone', function () {
    beforeEach(function () {

    });

    it('will display all todo items', function () {

    });
  });
});
