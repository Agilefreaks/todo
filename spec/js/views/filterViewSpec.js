define([
  'views/filterView',
  'collections/todoList',
  'ejs'
], function (FilterView, TodoList) {
  var filterView, subject;

  beforeAll(function () {
    filterView = new FilterView({collection: new TodoList()});
  });

  afterEach(function () {
    filterView.$el.empty();
  });

  describe('render', function () {
    beforeEach(function () {
      subject = function () {
        filterView.render();
      };
    });

    it('will define filterView', function () {
      subject();
      expect(filterView).toBeDefined();
    });
  });

  describe('filter_view', function () {
    beforeEach(function () {
      subject = function () {
        filterView.render();
      };
    });

    it('will trigger display all', function () {
      var displaySpy = spyOn(filterView.displayAll(), 'display').and.callThrough();

      subject();
      expect(displaySpy).toHaveBeenCalled();
    });

    it('will trigger filterDone', function () {
      var filterDoneSpy = spyOn(filterView.filterDone(), 'hide').and.callThrough();

      subject();
      expect(filterDoneSpy).toHaveBeenCalled();
    });

    it('will trigger filterNotDone', function () {
      var filterNotDoneSpy = spyOn(filterView.filterNotDone(), 'show').and.callThrough();

      subject();
      expect(filterNotDoneSpy).toHaveBeenCalled();
    });
  });
});
