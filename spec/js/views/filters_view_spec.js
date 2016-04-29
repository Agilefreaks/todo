define([
  'views/filters_view',
  'collections/todo',
  'ejs'
], function (FiltersView, TodoCollection) {
  var instance, subject;

  beforeEach(function () {
    instance = new FiltersView(new TodoCollection({name: 'test', done: 0}));
    subject = function () {
      return instance;
    };
  });

  describe('render', function () {
    beforeEach(function () {
      instance.render();
      subject = function () {
        return instance;
      };
    });

    it('renders filters', function () {
      expect(subject().$el.find('.filter_btn').length).not.toEqual(0);
    });
  });
});
